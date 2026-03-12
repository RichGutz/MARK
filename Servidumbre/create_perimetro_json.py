import json

data = [
    {"vertice": "1", "este": 506025.441, "norte": 8286116.356},
    {"vertice": "2", "este": 505110.821, "norte": 8284532.127},
    {"vertice": "3", "este": 504734.078, "norte": 8284749.617},
    {"vertice": "4", "este": 505677.473, "norte": 8286383.689},
    {"vertice": "5", "este": 505684.945, "norte": 8286361.442},
    {"vertice": "6", "este": 505680.281, "norte": 8286346.885},
    {"vertice": "7", "este": 505674.05, "norte": 8286327.433},
    {"vertice": "8", "este": 505666.905, "norte": 8286305.132},
    {"vertice": "9", "este": 505659.512, "norte": 8286282.056},
    {"vertice": "10", "este": 505669.382, "norte": 8286271.808},
    {"vertice": "11", "este": 505691.492, "norte": 8286263.155},
    {"vertice": "12", "este": 505699.321, "norte": 8286256.262},
    {"vertice": "13", "este": 505706.136, "norte": 8286264.159},
    {"vertice": "14", "este": 505713.53, "norte": 8286274.445},
    {"vertice": "15", "este": 505741.075, "norte": 8286289.037},
    {"vertice": "16", "este": 505764.002, "norte": 8286287.88},
    {"vertice": "17", "este": 505776.141, "norte": 8286288.322},
    {"vertice": "18", "este": 505799.014, "norte": 8286296.456},
    {"vertice": "19", "este": 505803.829, "norte": 8286291.939},
    {"vertice": "20", "este": 505810.117, "norte": 8286293.386},
    {"vertice": "21", "este": 505820.116, "norte": 8286294.394},
    {"vertice": "22", "este": 505822.233, "norte": 8286303.39},
    {"vertice": "23", "este": 505829.641, "norte": 8286309.74},
    {"vertice": "24", "este": 505850.732, "norte": 8286309.257},
    {"vertice": "25", "este": 505938.342, "norte": 8286301.583},
    {"vertice": "26", "este": 506047.418, "norte": 8286421.54}
]

with open(r'c:\Users\rguti\Petral.MARK\Servidumbre\PERIMETRO_NUEVO.json', 'w') as f:
    f.write(json.dumps(data, indent=4))
