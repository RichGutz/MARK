/**
 * Monte Carlo Simulation Engine for Project TANK
 * Focus: Logistical Mass Balance (Inventory "Breathing")
 * No financial metrics.
 */

class MonteCarloEngine {
    constructor() {
        // Constants based on DQM Analysis
        this.TANK_CAPACITY_MT = 6256; // 3400 m3 * 1.84 density
        this.NUM_BASE_TANKS = 3;
        this.NUM_BUFFER_TANKS = 2;
        this.TOTAL_CAPACITY_MT = (this.NUM_BASE_TANKS + this.NUM_BUFFER_TANKS) * this.TANK_CAPACITY_MT;
        
        // Simulation Parameters (Defaults)
        this.params = {
            trainWagonsPerDay: 10,      // Default
            trainCapacityMT: 80,        // 80 TM per wagon
            daysPerWeek: 7,             // Operation 24/7
            shipBatchMT: 16000,         // Ship load size
            avgShipIntervalDays: 14,    // Average frequency
            shipIntervalStdDev: 3       // Variability
        };
    }

    updateParams(newParams) {
        this.params = { ...this.params, ...newParams };
    }

    /**
     * Generates a random value based on Normal Distribution (Box-Muller transform)
     */
    randomNormal(mean, stdDev) {
        let u = 0, v = 0;
        while(u === 0) u = Math.random();
        while(v === 0) v = Math.random();
        let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return num * stdDev + mean;
    }

    /**
     * Runs a single 365-day simulation
     * Returns an array of daily states
     */
    runYearSimulation() {
        let dailyData = [];
        let currentInventory = 0;
        let plantStoppageDays = 0;
        
        // Schedule first ship
        let nextShipArrivalDay = Math.max(1, Math.round(this.randomNormal(this.params.avgShipIntervalDays, this.params.shipIntervalStdDev)));

        for (let day = 1; day <= 365; day++) {
            let supply = 0;
            let dispatch = 0;

            // 1. Supply (Train)
            // Logic: Train arrives if it's an operational day
            let isOperationalDay = true;
            if (this.params.daysPerWeek === 5) {
                let dayOfWeek = day % 7; // 0=Sunday, 1=Monday...
                if (dayOfWeek === 0 || dayOfWeek === 6) isOperationalDay = false;
            }

            if (isOperationalDay) {
                supply = this.params.trainWagonsPerDay * this.params.trainCapacityMT;
            }

            // 2. Dispatch (Ship)
            if (day === nextShipArrivalDay) {
                if (currentInventory >= this.params.shipBatchMT) {
                    dispatch = this.params.shipBatchMT;
                    // Schedule next ship
                    let interval = Math.max(2, this.randomNormal(this.params.avgShipIntervalDays, this.params.shipIntervalStdDev));
                    nextShipArrivalDay = day + Math.round(interval);
                } else {
                    // Ship waits in port (No dispatch today, try again tomorrow)
                    nextShipArrivalDay = day + 1; 
                }
            }

            // 3. Mass Balance
            currentInventory += supply - dispatch;

            // 4. Constraints
            if (currentInventory > this.TOTAL_CAPACITY_MT) {
                plantStoppageDays++;
                currentInventory = this.TOTAL_CAPACITY_MT; // Cap at max
            }
            if (currentInventory < 0) currentInventory = 0;

            // 5. Save state
            dailyData.push({
                day: day,
                inventory: currentInventory,
                supply: supply,
                dispatch: dispatch,
                isSaturated: currentInventory >= this.TOTAL_CAPACITY_MT
            });
        }

        return {
            dailyData,
            stats: {
                plantStoppageDays,
                saturationRisk: (plantStoppageDays / 365) * 100
            }
        };
    }

    /**
     * Runs Monte Carlo (N iterations) to calculate probabilities
     */
    runMonteCarlo(iterations = 1000) {
        let totalStoppageDays = 0;
        let risks = [];

        for (let i = 0; i < iterations; i++) {
            let result = this.runYearSimulation();
            totalStoppageDays += result.stats.plantStoppageDays;
            risks.push(result.stats.saturationRisk);
        }

        return {
            avgStoppageDays: totalStoppageDays / iterations,
            avgRisk: risks.reduce((a, b) => a + b, 0) / iterations,
            maxRisk: Math.max(...risks),
            minRisk: Math.min(...risks)
        };
    }
}

// Export for browser use
if (typeof module !== 'undefined') {
    module.exports = MonteCarloEngine;
} else {
    window.MonteCarloEngine = MonteCarloEngine;
}
