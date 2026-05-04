/**
 * Tank Visualizer for Project TANK
 * Renders 5 vertical rectangles (3 Base, 2 Buffer)
 */

class TankVisualizer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.tankCapacity = 6256;
        this.tanks = [];
        this.init();
    }

    init() {
        if (!this.container) return;
        this.container.innerHTML = '';
        this.container.style.display = 'flex';
        this.container.style.gap = '20px';
        this.container.style.justifyContent = 'center';
        this.container.style.padding = '20px';
        this.container.style.backgroundColor = 'rgba(0,0,0,0.05)';
        this.container.style.borderRadius = '10px';

        // Create 5 tanks
        for (let i = 1; i <= 5; i++) {
            const isBase = i <= 3;
            const tankWrapper = document.createElement('div');
            tankWrapper.className = 'tank-wrapper';
            tankWrapper.style.textAlign = 'center';

            const tankLabel = document.createElement('div');
            tankLabel.innerText = isBase ? `BASE ${i}` : `BUFFER ${i-3}`;
            tankLabel.style.fontSize = '10px';
            tankLabel.style.marginBottom = '5px';
            tankLabel.style.fontWeight = 'bold';
            tankLabel.style.color = isBase ? '#2196F3' : '#F44336';

            const tankEl = document.createElement('div');
            tankEl.className = 'tank-container';
            tankEl.id = `tank-${i}`;
            tankEl.style.width = '50px';
            tankEl.style.height = '120px';
            tankEl.style.border = `3px solid ${isBase ? '#2196F3' : '#F44336'}`;
            tankEl.style.position = 'relative';
            tankEl.style.backgroundColor = '#fff';
            tankEl.style.overflow = 'hidden';
            tankEl.style.borderRadius = '2px';

            const fillEl = document.createElement('div');
            fillEl.className = 'tank-fill';
            fillEl.id = `tank-fill-${i}`;
            fillEl.style.width = '100%';
            fillEl.style.height = '0%'; // Start empty
            fillEl.style.backgroundColor = '#4CAF50';
            fillEl.style.position = 'absolute';
            fillEl.style.bottom = '0';
            fillEl.style.transition = 'height 0.3s ease-out';

            tankEl.appendChild(fillEl);
            tankWrapper.appendChild(tankLabel);
            tankWrapper.appendChild(tankEl);
            this.container.appendChild(tankWrapper);
            
            this.tanks.push(fillEl);
        }
    }

    /**
     * Updates the visual levels based on total inventory
     * Logic: Fill Base tanks first, then Buffer tanks
     */
    updateLevels(totalInventory) {
        let remaining = totalInventory;
        for (let i = 0; i < 5; i++) {
            let fillAmount = Math.min(remaining, this.tankCapacity);
            let percentage = (fillAmount / this.tankCapacity) * 100;
            this.tanks[i].style.height = `${percentage}%`;
            remaining -= fillAmount;
            if (remaining < 0) remaining = 0;
        }
    }
}

// Export for browser use
if (typeof module !== 'undefined') {
    module.exports = TankVisualizer;
} else {
    window.TankVisualizer = TankVisualizer;
}
