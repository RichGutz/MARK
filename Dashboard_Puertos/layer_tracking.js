// Archivo filtrado: Hoy >= 9:00 AM + Elevación PERSISTENTE + Suavizado Anti-Teleport
// Generado: 11/03/2026 18:57:42

const TRACKING_POINTS = [
  {
    "id": 48,
    "latitude": -15.0185675,
    "longitude": -75.0073524,
    "created_at": "2026-03-11T13:21:40.826962+00:00",
    "accuracy": 7.90799999237061,
    "elevation": 538,
    "ordinal": 1
  },
  {
    "id": 49,
    "latitude": -15.0300837,
    "longitude": -75.0072579,
    "created_at": "2026-03-11T13:22:46.558486+00:00",
    "accuracy": 9.4379997253418,
    "elevation": 562,
    "ordinal": 2
  },
  {
    "id": 50,
    "latitude": -15.0300837,
    "longitude": -75.0072579,
    "created_at": "2026-03-11T13:22:47.101877+00:00",
    "accuracy": 9.4379997253418,
    "elevation": 562,
    "ordinal": 3
  },
  {
    "id": 51,
    "latitude": -15.0415536,
    "longitude": -75.0064659,
    "created_at": "2026-03-11T13:27:13.607578+00:00",
    "accuracy": 7.99300003051758,
    "elevation": 557,
    "ordinal": 4
  },
  {
    "id": 55,
    "latitude": -15.0481039,
    "longitude": -75.0058654,
    "created_at": "2026-03-11T13:27:39.533109+00:00",
    "accuracy": 3,
    "elevation": 549,
    "ordinal": 5
  },
  {
    "id": 56,
    "latitude": -15.0480891,
    "longitude": -75.0058393,
    "created_at": "2026-03-11T13:28:41.923145+00:00",
    "accuracy": 3,
    "elevation": 552,
    "ordinal": 6
  },
  {
    "id": 57,
    "latitude": -15.0480803,
    "longitude": -75.0058507,
    "created_at": "2026-03-11T13:32:32.818351+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 549,
    "ordinal": 7
  },
  {
    "id": 58,
    "latitude": -15.0480828,
    "longitude": -75.0058429,
    "created_at": "2026-03-11T13:33:32.464306+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 549,
    "ordinal": 8
  },
  {
    "id": 59,
    "latitude": -15.0480706,
    "longitude": -75.0057646,
    "created_at": "2026-03-11T13:36:47.555621+00:00",
    "accuracy": 10.628999710083,
    "elevation": 552,
    "ordinal": 9
  },
  {
    "id": 60,
    "latitude": -15.0234138,
    "longitude": -75.0074381,
    "created_at": "2026-03-11T13:39:29.860332+00:00",
    "accuracy": 8.07800006866455,
    "elevation": 553,
    "ordinal": 10
  },
  {
    "id": 70,
    "latitude": -15.0117585,
    "longitude": -75.0045111,
    "created_at": "2026-03-11T13:40:29.480982+00:00",
    "accuracy": 9.01299953460693,
    "elevation": 528,
    "ordinal": 11
  },
  {
    "id": 71,
    "latitude": -15.0010649,
    "longitude": -75.0003948,
    "created_at": "2026-03-11T13:41:29.298414+00:00",
    "accuracy": 8.50300025939941,
    "elevation": 526,
    "ordinal": 12
  },
  {
    "id": 72,
    "latitude": -14.9934271,
    "longitude": -74.9978192,
    "created_at": "2026-03-11T13:42:29.864551+00:00",
    "accuracy": 11.1759996414185,
    "elevation": 517,
    "ordinal": 13
  },
  {
    "id": 73,
    "latitude": -14.9930333,
    "longitude": -74.9980188,
    "created_at": "2026-03-11T13:43:29.328647+00:00",
    "accuracy": 8.8430004119873,
    "elevation": 515,
    "ordinal": 14
  },
  {
    "id": 74,
    "latitude": -14.9930948,
    "longitude": -74.998002,
    "created_at": "2026-03-11T13:44:29.49695+00:00",
    "accuracy": 3.71099996566772,
    "elevation": 515,
    "ordinal": 15
  },
  {
    "id": 75,
    "latitude": -14.993094,
    "longitude": -74.9980022,
    "created_at": "2026-03-11T13:45:29.62642+00:00",
    "accuracy": 3.40100002288818,
    "elevation": 515,
    "ordinal": 16
  },
  {
    "id": 76,
    "latitude": -14.9931054,
    "longitude": -74.9980104,
    "created_at": "2026-03-11T13:46:29.519472+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 515,
    "ordinal": 17
  },
  {
    "id": 77,
    "latitude": -14.993104,
    "longitude": -74.9980636,
    "created_at": "2026-03-11T13:47:29.336541+00:00",
    "accuracy": 3.07800006866455,
    "elevation": 515,
    "ordinal": 18
  },
  {
    "id": 78,
    "latitude": -14.9931016,
    "longitude": -74.998062,
    "created_at": "2026-03-11T13:48:29.315852+00:00",
    "accuracy": 4.50699996948242,
    "elevation": 515,
    "ordinal": 19
  },
  {
    "id": 79,
    "latitude": -14.9930939,
    "longitude": -74.9980393,
    "created_at": "2026-03-11T13:48:54.301038+00:00",
    "accuracy": 3,
    "elevation": 515,
    "ordinal": 20
  },
  {
    "id": 80,
    "latitude": -14.9931109,
    "longitude": -74.9980469,
    "created_at": "2026-03-11T13:48:54.691351+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515,
    "ordinal": 21
  },
  {
    "id": 81,
    "latitude": -14.993121,
    "longitude": -74.9980488,
    "created_at": "2026-03-11T13:48:55.13673+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515,
    "ordinal": 22
  },
  {
    "id": 82,
    "latitude": -14.9930711,
    "longitude": -74.9980467,
    "created_at": "2026-03-11T13:49:29.47788+00:00",
    "accuracy": 3,
    "elevation": 515,
    "ordinal": 23
  },
  {
    "id": 83,
    "latitude": -14.993138,
    "longitude": -74.9980031,
    "created_at": "2026-03-11T13:49:54.119261+00:00",
    "accuracy": 3.22499990463257,
    "elevation": 515,
    "ordinal": 24
  },
  {
    "id": 84,
    "latitude": -14.9931062,
    "longitude": -74.998029,
    "created_at": "2026-03-11T13:50:29.315147+00:00",
    "accuracy": 3.7960000038147,
    "elevation": 515,
    "ordinal": 25
  },
  {
    "id": 85,
    "latitude": -14.9931176,
    "longitude": -74.998013,
    "created_at": "2026-03-11T13:50:53.777207+00:00",
    "accuracy": 3,
    "elevation": 515,
    "ordinal": 26
  },
  {
    "id": 86,
    "latitude": -14.9931062,
    "longitude": -74.998029,
    "created_at": "2026-03-11T13:51:29.354303+00:00",
    "accuracy": 4.08199977874756,
    "elevation": 515,
    "ordinal": 27
  },
  {
    "id": 87,
    "latitude": -14.9931228,
    "longitude": -74.9979987,
    "created_at": "2026-03-11T13:51:53.538142+00:00",
    "accuracy": 3,
    "elevation": 515,
    "ordinal": 28
  },
  {
    "id": 88,
    "latitude": -14.9931062,
    "longitude": -74.998029,
    "created_at": "2026-03-11T13:52:29.344854+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 515,
    "ordinal": 29
  },
  {
    "id": 89,
    "latitude": -14.9931164,
    "longitude": -74.9979963,
    "created_at": "2026-03-11T13:52:53.729056+00:00",
    "accuracy": 3,
    "elevation": 515,
    "ordinal": 30
  },
  {
    "id": 90,
    "latitude": -14.9931062,
    "longitude": -74.998029,
    "created_at": "2026-03-11T13:53:29.526421+00:00",
    "accuracy": 5.78200006484985,
    "elevation": 515,
    "ordinal": 31
  },
  {
    "id": 91,
    "latitude": -14.9931151,
    "longitude": -74.998,
    "created_at": "2026-03-11T13:53:53.66409+00:00",
    "accuracy": 3,
    "elevation": 515,
    "ordinal": 32
  },
  {
    "id": 92,
    "latitude": -14.993118,
    "longitude": -74.9980275,
    "created_at": "2026-03-11T13:54:29.328216+00:00",
    "accuracy": 6.12200021743774,
    "elevation": 515,
    "ordinal": 33
  },
  {
    "id": 93,
    "latitude": -14.9931129,
    "longitude": -74.998001,
    "created_at": "2026-03-11T13:54:53.781386+00:00",
    "accuracy": 3,
    "elevation": 515,
    "ordinal": 34
  },
  {
    "id": 94,
    "latitude": -14.993118,
    "longitude": -74.9980275,
    "created_at": "2026-03-11T13:55:29.343012+00:00",
    "accuracy": 5.18699979782104,
    "elevation": 515,
    "ordinal": 35
  },
  {
    "id": 95,
    "latitude": -14.9930737,
    "longitude": -74.9980594,
    "created_at": "2026-03-11T13:55:53.561768+00:00",
    "accuracy": 3.81599998474121,
    "elevation": 515,
    "ordinal": 36
  },
  {
    "id": 96,
    "latitude": -14.9930747,
    "longitude": -74.998092,
    "created_at": "2026-03-11T13:56:16.865531+00:00",
    "accuracy": 3,
    "elevation": 515,
    "ordinal": 37
  },
  {
    "id": 98,
    "latitude": -14.9930727,
    "longitude": -74.9980731,
    "created_at": "2026-03-11T13:56:29.312758+00:00",
    "accuracy": 6.3769998550415,
    "elevation": 515,
    "ordinal": 38
  },
  {
    "id": 99,
    "latitude": -14.9930736,
    "longitude": -74.99806,
    "created_at": "2026-03-11T13:57:07.370709+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515,
    "ordinal": 39
  },
  {
    "id": 100,
    "latitude": -14.9930727,
    "longitude": -74.9980731,
    "created_at": "2026-03-11T13:57:29.305765+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 515,
    "ordinal": 40
  },
  {
    "id": 101,
    "latitude": -14.9930716,
    "longitude": -74.9980595,
    "created_at": "2026-03-11T13:57:53.453311+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515,
    "ordinal": 41
  },
  {
    "id": 102,
    "latitude": -14.9930727,
    "longitude": -74.9980731,
    "created_at": "2026-03-11T13:58:29.320061+00:00",
    "accuracy": 5.01700019836426,
    "elevation": 515,
    "ordinal": 42
  },
  {
    "id": 103,
    "latitude": -14.9930677,
    "longitude": -74.9980586,
    "created_at": "2026-03-11T13:58:53.911261+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515,
    "ordinal": 43
  },
  {
    "id": 104,
    "latitude": -14.991501,
    "longitude": -74.9991978,
    "created_at": "2026-03-11T13:59:29.318349+00:00",
    "accuracy": 6.3769998550415,
    "elevation": 508,
    "ordinal": 44
  },
  {
    "id": 105,
    "latitude": -14.9902423,
    "longitude": -75.0010029,
    "created_at": "2026-03-11T13:59:53.588959+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 502,
    "ordinal": 45
  },
  {
    "id": 106,
    "latitude": -14.9893595,
    "longitude": -75.0044282,
    "created_at": "2026-03-11T14:00:35.975265+00:00",
    "accuracy": 10.2889995574951,
    "elevation": 494,
    "ordinal": 46
  },
  {
    "id": 107,
    "latitude": -14.9894438,
    "longitude": -75.0066271,
    "created_at": "2026-03-11T14:01:05.130109+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 489,
    "ordinal": 47
  },
  {
    "id": 108,
    "latitude": -14.9881893,
    "longitude": -75.0097818,
    "created_at": "2026-03-11T14:01:41.960433+00:00",
    "accuracy": 4.76200008392334,
    "elevation": 482,
    "ordinal": 48
  },
  {
    "id": 110,
    "latitude": -14.9890761,
    "longitude": -75.0113341,
    "created_at": "2026-03-11T14:01:54.643826+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 488,
    "ordinal": 49
  },
  {
    "id": 111,
    "latitude": -14.990074,
    "longitude": -75.0132911,
    "created_at": "2026-03-11T14:02:35.080509+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 492,
    "ordinal": 50
  },
  {
    "id": 112,
    "latitude": -14.990074,
    "longitude": -75.0132911,
    "created_at": "2026-03-11T14:02:48.178062+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 492,
    "ordinal": 51
  },
  {
    "id": 113,
    "latitude": -14.990074,
    "longitude": -75.0132911,
    "created_at": "2026-03-11T14:04:32.191358+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 492,
    "ordinal": 52
  },
  {
    "id": 116,
    "latitude": -14.9995368,
    "longitude": -75.0409901,
    "created_at": "2026-03-11T14:08:54.693312+00:00",
    "accuracy": 5.01700019836426,
    "elevation": 477,
    "ordinal": 53
  },
  {
    "id": 122,
    "latitude": -15.0033885,
    "longitude": -75.0700428,
    "created_at": "2026-03-11T14:14:30.056142+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 484,
    "ordinal": 54
  },
  {
    "id": 133,
    "latitude": -15.0058763,
    "longitude": -75.0720749,
    "created_at": "2026-03-11T14:15:29.348937+00:00",
    "accuracy": 6.29199981689453,
    "elevation": 486,
    "ordinal": 55
  },
  {
    "id": 134,
    "latitude": -15.0099262,
    "longitude": -75.0735411,
    "created_at": "2026-03-11T14:16:29.555342+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 488,
    "ordinal": 56
  },
  {
    "id": 135,
    "latitude": -15.0097817,
    "longitude": -75.0735208,
    "created_at": "2026-03-11T14:16:32.77797+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 488,
    "ordinal": 57
  },
  {
    "id": 136,
    "latitude": -15.0118171,
    "longitude": -75.0743525,
    "created_at": "2026-03-11T14:17:23.413816+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 487,
    "ordinal": 58
  },
  {
    "id": 141,
    "latitude": -15.0172757,
    "longitude": -75.0763879,
    "created_at": "2026-03-11T14:17:53.494355+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 489,
    "ordinal": 59
  },
  {
    "id": 143,
    "latitude": -15.0200594,
    "longitude": -75.0775099,
    "created_at": "2026-03-11T14:18:29.341043+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 491,
    "ordinal": 60
  },
  {
    "id": 161,
    "latitude": -15.0214135,
    "longitude": -75.0776804,
    "created_at": "2026-03-11T14:18:53.410788+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 493,
    "ordinal": 61
  },
  {
    "id": 171,
    "latitude": -15.0235884,
    "longitude": -75.0784739,
    "created_at": "2026-03-11T14:19:29.610072+00:00",
    "accuracy": 6.03700017929077,
    "elevation": 496,
    "ordinal": 62
  },
  {
    "id": 172,
    "latitude": -15.0234689,
    "longitude": -75.0784464,
    "created_at": "2026-03-11T14:19:47.344069+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 496,
    "ordinal": 63
  },
  {
    "id": 173,
    "latitude": -15.0234689,
    "longitude": -75.0784464,
    "created_at": "2026-03-11T14:20:04.283737+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 496,
    "ordinal": 64
  },
  {
    "id": 176,
    "latitude": -15.027724,
    "longitude": -75.0800133,
    "created_at": "2026-03-11T14:20:28.072136+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 506,
    "ordinal": 65
  },
  {
    "id": 177,
    "latitude": -15.0278738,
    "longitude": -75.0800595,
    "created_at": "2026-03-11T14:20:30.403155+00:00",
    "accuracy": 4.84700012207031,
    "elevation": 506,
    "ordinal": 66
  },
  {
    "id": 178,
    "latitude": -15.0252394,
    "longitude": -75.0791112,
    "created_at": "2026-03-11T14:20:43.779+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 500,
    "ordinal": 67
  },
  {
    "id": 180,
    "latitude": -15.0319001,
    "longitude": -75.0815559,
    "created_at": "2026-03-11T14:21:28.065325+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515,
    "ordinal": 68
  },
  {
    "id": 181,
    "latitude": -15.0320375,
    "longitude": -75.0815768,
    "created_at": "2026-03-11T14:21:29.330681+00:00",
    "accuracy": 4.76100015640259,
    "elevation": 515,
    "ordinal": 69
  },
  {
    "id": 182,
    "latitude": -15.0337822,
    "longitude": -75.082274,
    "created_at": "2026-03-11T14:21:53.487881+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 521,
    "ordinal": 70
  },
  {
    "id": 183,
    "latitude": -15.0361292,
    "longitude": -75.0831557,
    "created_at": "2026-03-11T14:22:29.698072+00:00",
    "accuracy": 4.84700012207031,
    "elevation": 526,
    "ordinal": 71
  },
  {
    "id": 184,
    "latitude": -15.0359991,
    "longitude": -75.0831098,
    "created_at": "2026-03-11T14:22:31.106324+00:00",
    "accuracy": 4.38000011444092,
    "elevation": 526,
    "ordinal": 72
  },
  {
    "id": 185,
    "latitude": -15.0378563,
    "longitude": -75.0838202,
    "created_at": "2026-03-11T14:22:54.329113+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 533,
    "ordinal": 73
  },
  {
    "id": 186,
    "latitude": -15.038663,
    "longitude": -75.0840703,
    "created_at": "2026-03-11T14:23:30.385178+00:00",
    "accuracy": 5.44199991226196,
    "elevation": 535,
    "ordinal": 74
  },
  {
    "id": 187,
    "latitude": -15.0402869,
    "longitude": -75.0846979,
    "created_at": "2026-03-11T14:23:54.033985+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 541,
    "ordinal": 75
  },
  {
    "id": 189,
    "latitude": -15.0433906,
    "longitude": -75.0858041,
    "created_at": "2026-03-11T14:24:29.701653+00:00",
    "accuracy": 4.42199993133545,
    "elevation": 551,
    "ordinal": 76
  },
  {
    "id": 190,
    "latitude": -15.0455219,
    "longitude": -75.0867391,
    "created_at": "2026-03-11T14:24:54.415712+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 560,
    "ordinal": 77
  },
  {
    "id": 191,
    "latitude": -15.047562,
    "longitude": -75.0877209,
    "created_at": "2026-03-11T14:25:29.354726+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 566,
    "ordinal": 78
  },
  {
    "id": 192,
    "latitude": -15.0491536,
    "longitude": -75.0884712,
    "created_at": "2026-03-11T14:25:53.376281+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 570,
    "ordinal": 79
  },
  {
    "id": 193,
    "latitude": -15.0514655,
    "longitude": -75.0900743,
    "created_at": "2026-03-11T14:26:29.337174+00:00",
    "accuracy": 5.35699987411499,
    "elevation": 583,
    "ordinal": 80
  },
  {
    "id": 194,
    "latitude": -15.0525621,
    "longitude": -75.0912095,
    "created_at": "2026-03-11T14:27:15.886682+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 589,
    "ordinal": 81
  },
  {
    "id": 197,
    "latitude": -15.0547875,
    "longitude": -75.0933718,
    "created_at": "2026-03-11T14:27:29.626286+00:00",
    "accuracy": 4.76200008392334,
    "elevation": 597,
    "ordinal": 82
  },
  {
    "id": 198,
    "latitude": -15.0575212,
    "longitude": -75.0963018,
    "created_at": "2026-03-11T14:28:29.726097+00:00",
    "accuracy": 6.40799999237061,
    "elevation": 617,
    "ordinal": 83
  },
  {
    "id": 199,
    "latitude": -15.0597823,
    "longitude": -75.0989245,
    "created_at": "2026-03-11T14:29:29.415894+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 630,
    "ordinal": 84
  },
  {
    "id": 201,
    "latitude": -15.0607546,
    "longitude": -75.1001231,
    "created_at": "2026-03-11T14:29:58.165082+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 638,
    "ordinal": 85
  },
  {
    "id": 202,
    "latitude": -15.0622711,
    "longitude": -75.1019492,
    "created_at": "2026-03-11T14:30:29.518368+00:00",
    "accuracy": 5.18699979782104,
    "elevation": 651,
    "ordinal": 86
  },
  {
    "id": 203,
    "latitude": -15.0632079,
    "longitude": -75.1029359,
    "created_at": "2026-03-11T14:30:58.602389+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 659,
    "ordinal": 87
  },
  {
    "id": 208,
    "latitude": -15.0607546,
    "longitude": -75.1001231,
    "created_at": "2026-03-11T14:31:16.130751+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 638,
    "ordinal": 88
  },
  {
    "id": 210,
    "latitude": -15.065509,
    "longitude": -75.1057703,
    "created_at": "2026-03-11T14:31:56.517713+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 681,
    "ordinal": 89
  },
  {
    "id": 211,
    "latitude": -15.0669944,
    "longitude": -75.1075799,
    "created_at": "2026-03-11T14:32:29.329571+00:00",
    "accuracy": 4.33699989318848,
    "elevation": 702,
    "ordinal": 90
  },
  {
    "id": 212,
    "latitude": -15.0679128,
    "longitude": -75.1087222,
    "created_at": "2026-03-11T14:32:54.793342+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 707,
    "ordinal": 91
  },
  {
    "id": 221,
    "latitude": -15.0690716,
    "longitude": -75.1101336,
    "created_at": "2026-03-11T14:33:29.512099+00:00",
    "accuracy": 4.67700004577637,
    "elevation": 721,
    "ordinal": 92
  },
  {
    "id": 222,
    "latitude": -15.0697739,
    "longitude": -75.1113863,
    "created_at": "2026-03-11T14:33:58.862567+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 724,
    "ordinal": 93
  },
  {
    "id": 223,
    "latitude": -15.0760981,
    "longitude": -75.1194646,
    "created_at": "2026-03-11T14:37:07.573067+00:00",
    "accuracy": 4.33799982070923,
    "elevation": 784,
    "ordinal": 94
  },
  {
    "id": 227,
    "latitude": -15.0728344,
    "longitude": -75.1170456,
    "created_at": "2026-03-11T14:38:58.061864+00:00",
    "accuracy": 4.42199993133545,
    "elevation": 753,
    "ordinal": 95
  },
  {
    "id": 239,
    "latitude": -15.076083,
    "longitude": -75.1194116,
    "created_at": "2026-03-11T14:39:51.490581+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 784,
    "ordinal": 96
  },
  {
    "id": 241,
    "latitude": -15.0796351,
    "longitude": -75.1238428,
    "created_at": "2026-03-11T14:42:13.159498+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 797,
    "ordinal": 97
  },
  {
    "id": 243,
    "latitude": -15.076083,
    "longitude": -75.1194164,
    "created_at": "2026-03-11T14:42:33.422813+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 784,
    "ordinal": 98
  },
  {
    "id": 245,
    "latitude": -15.0830036,
    "longitude": -75.1263857,
    "created_at": "2026-03-11T14:43:10.027242+00:00",
    "accuracy": 4.42199993133545,
    "elevation": 825,
    "ordinal": 99
  },
  {
    "id": 246,
    "latitude": -15.0863602,
    "longitude": -75.1291683,
    "created_at": "2026-03-11T14:43:51.483106+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 848,
    "ordinal": 100
  },
  {
    "id": 247,
    "latitude": -15.0864937,
    "longitude": -75.1292676,
    "created_at": "2026-03-11T14:43:53.824719+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 849,
    "ordinal": 101
  },
  {
    "id": 257,
    "latitude": -15.0902774,
    "longitude": -75.1320566,
    "created_at": "2026-03-11T14:44:51.831784+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 879,
    "ordinal": 102
  },
  {
    "id": 258,
    "latitude": -15.0940764,
    "longitude": -75.134046,
    "created_at": "2026-03-11T14:46:49.070115+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866,
    "ordinal": 103
  },
  {
    "id": 262,
    "latitude": -15.0940746,
    "longitude": -75.1340491,
    "created_at": "2026-03-11T14:48:28.813102+00:00",
    "accuracy": 212.511001586914,
    "elevation": 866,
    "ordinal": 104
  },
  {
    "id": 263,
    "latitude": -15.0940636,
    "longitude": -75.1340672,
    "created_at": "2026-03-11T14:48:57.044623+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866,
    "ordinal": 105
  },
  {
    "id": 264,
    "latitude": -15.0953059,
    "longitude": -75.1362746,
    "created_at": "2026-03-11T14:49:58.738143+00:00",
    "accuracy": 58.2949981689453,
    "elevation": 880,
    "ordinal": 106
  },
  {
    "id": 265,
    "latitude": -15.0979428,
    "longitude": -75.14093,
    "created_at": "2026-03-11T14:51:00.519871+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 858,
    "ordinal": 107
  },
  {
    "id": 266,
    "latitude": -15.0979428,
    "longitude": -75.14093,
    "created_at": "2026-03-11T15:22:44.808176+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 858,
    "ordinal": 108
  },
  {
    "id": 268,
    "latitude": -15.1218672,
    "longitude": -75.1830988,
    "created_at": "2026-03-11T15:50:03.985163+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 741,
    "ordinal": 109
  },
  {
    "id": 277,
    "latitude": -15.1408076,
    "longitude": -75.2837356,
    "created_at": "2026-03-11T15:52:39.7585+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 436,
    "ordinal": 110
  },
  {
    "id": 283,
    "latitude": -15.142121,
    "longitude": -75.2864545,
    "created_at": "2026-03-11T15:52:58.700264+00:00",
    "accuracy": 4.33599996566772,
    "elevation": 423,
    "ordinal": 111
  },
  {
    "id": 396,
    "latitude": -15.1410318,
    "longitude": -75.2801282,
    "created_at": "2026-03-11T15:53:25.673281+00:00",
    "accuracy": 4.50699996948242,
    "elevation": 441,
    "ordinal": 112
  },
  {
    "id": 410,
    "latitude": -15.1410318,
    "longitude": -75.2801282,
    "created_at": "2026-03-11T15:53:27.203425+00:00",
    "accuracy": 4.50699996948242,
    "elevation": 441,
    "ordinal": 113
  },
  {
    "id": 411,
    "latitude": -15.1429433,
    "longitude": -75.2867557,
    "created_at": "2026-03-11T15:53:51.453889+00:00",
    "accuracy": 2.72099995613098,
    "elevation": 414,
    "ordinal": 114
  },
  {
    "id": 412,
    "latitude": -15.1429406,
    "longitude": -75.2867637,
    "created_at": "2026-03-11T15:54:56.435218+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 414,
    "ordinal": 115
  },
  {
    "id": 413,
    "latitude": -15.1428933,
    "longitude": -75.2867719,
    "created_at": "2026-03-11T15:55:51.492526+00:00",
    "accuracy": 3.36999988555908,
    "elevation": 414,
    "ordinal": 116
  },
  {
    "id": 414,
    "latitude": -15.1428922,
    "longitude": -75.2867745,
    "created_at": "2026-03-11T15:56:51.469625+00:00",
    "accuracy": 3.14599990844727,
    "elevation": 414,
    "ordinal": 117
  },
  {
    "id": 415,
    "latitude": -15.142871,
    "longitude": -75.2867645,
    "created_at": "2026-03-11T15:57:51.489721+00:00",
    "accuracy": 3,
    "elevation": 414,
    "ordinal": 118
  },
  {
    "id": 416,
    "latitude": -15.1428887,
    "longitude": -75.2867688,
    "created_at": "2026-03-11T15:58:51.530929+00:00",
    "accuracy": 4.45900011062622,
    "elevation": 414,
    "ordinal": 119
  },
  {
    "id": 417,
    "latitude": -15.1428664,
    "longitude": -75.2867461,
    "created_at": "2026-03-11T15:59:51.475672+00:00",
    "accuracy": 3,
    "elevation": 414,
    "ordinal": 120
  },
  {
    "id": 418,
    "latitude": -15.090414,
    "longitude": -75.1321787,
    "created_at": "2026-03-11T16:04:12.347096+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 879,
    "ordinal": 121
  },
  {
    "id": 445,
    "latitude": -15.0986265,
    "longitude": -75.1421052,
    "created_at": "2026-03-11T16:04:56.610638+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845,
    "ordinal": 122
  },
  {
    "id": 446,
    "latitude": -15.0986265,
    "longitude": -75.1421052,
    "created_at": "2026-03-11T16:04:56.924459+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845,
    "ordinal": 123
  },
  {
    "id": 448,
    "latitude": -15.0986265,
    "longitude": -75.1421052,
    "created_at": "2026-03-11T16:04:57.241282+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845,
    "ordinal": 124
  },
  {
    "id": 450,
    "latitude": -15.0986265,
    "longitude": -75.1421052,
    "created_at": "2026-03-11T16:04:57.567225+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845,
    "ordinal": 125
  },
  {
    "id": 452,
    "latitude": -15.0986267,
    "longitude": -75.142138,
    "created_at": "2026-03-11T16:04:57.861719+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845,
    "ordinal": 126
  },
  {
    "id": 454,
    "latitude": -15.0986243,
    "longitude": -75.1421373,
    "created_at": "2026-03-11T16:04:58.17888+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845,
    "ordinal": 127
  },
  {
    "id": 456,
    "latitude": -15.0986658,
    "longitude": -75.1422031,
    "created_at": "2026-03-11T16:04:58.484208+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845,
    "ordinal": 128
  },
  {
    "id": 460,
    "latitude": -15.0952093,
    "longitude": -75.1360862,
    "created_at": "2026-03-11T16:05:47.223932+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 880,
    "ordinal": 129
  },
  {
    "id": 467,
    "latitude": -15.1574647,
    "longitude": -75.2879565,
    "created_at": "2026-03-11T16:08:07.065122+00:00",
    "accuracy": 4.72900009155273,
    "elevation": 172,
    "ordinal": 130
  },
  {
    "id": 475,
    "latitude": -15.1464817,
    "longitude": -75.2858728,
    "created_at": "2026-03-11T16:12:54.545164+00:00",
    "accuracy": 4.33699989318848,
    "elevation": 361,
    "ordinal": 131
  },
  {
    "id": 477,
    "latitude": -15.1464817,
    "longitude": -75.2858728,
    "created_at": "2026-03-11T16:12:54.546083+00:00",
    "accuracy": 4.33699989318848,
    "elevation": 361,
    "ordinal": 132
  },
  {
    "id": 484,
    "latitude": -15.1464817,
    "longitude": -75.2858728,
    "created_at": "2026-03-11T16:12:55.007991+00:00",
    "accuracy": 4.33699989318848,
    "elevation": 361,
    "ordinal": 133
  },
  {
    "id": 490,
    "latitude": -15.1599205,
    "longitude": -75.2859943,
    "created_at": "2026-03-11T16:13:51.681578+00:00",
    "accuracy": 3.23099994659424,
    "elevation": 137,
    "ordinal": 134
  },
  {
    "id": 491,
    "latitude": -15.1599602,
    "longitude": -75.2860087,
    "created_at": "2026-03-11T16:14:53.101646+00:00",
    "accuracy": 4.58900022506714,
    "elevation": 137,
    "ordinal": 135
  },
  {
    "id": 492,
    "latitude": -15.1599968,
    "longitude": -75.2860203,
    "created_at": "2026-03-11T16:16:13.935488+00:00",
    "accuracy": 2.72099995613098,
    "elevation": 137,
    "ordinal": 136
  },
  {
    "id": 493,
    "latitude": -15.1597665,
    "longitude": -75.2861119,
    "created_at": "2026-03-11T16:17:07.307165+00:00",
    "accuracy": 3.02300000190735,
    "elevation": 137,
    "ordinal": 137
  },
  {
    "id": 494,
    "latitude": -15.1405967,
    "longitude": -75.282136,
    "created_at": "2026-03-11T16:26:26.694032+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 441,
    "ordinal": 138
  },
  {
    "id": 496,
    "latitude": -15.1715403,
    "longitude": -75.2666315,
    "created_at": "2026-03-11T16:29:31.31406+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 178,
    "ordinal": 139
  },
  {
    "id": 498,
    "latitude": -15.1715545,
    "longitude": -75.2666247,
    "created_at": "2026-03-11T16:33:03.962677+00:00",
    "accuracy": 3.81200003623962,
    "elevation": 178,
    "ordinal": 140
  },
  {
    "id": 499,
    "latitude": -15.1715365,
    "longitude": -75.2666313,
    "created_at": "2026-03-11T16:33:15.932363+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 178,
    "ordinal": 141
  },
  {
    "id": 500,
    "latitude": -15.1715352,
    "longitude": -75.2666577,
    "created_at": "2026-03-11T16:33:16.488592+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 178,
    "ordinal": 142
  },
  {
    "id": 503,
    "latitude": -15.1715546,
    "longitude": -75.2666341,
    "created_at": "2026-03-11T16:34:11.500808+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 178,
    "ordinal": 143
  },
  {
    "id": 505,
    "latitude": -15.1715681,
    "longitude": -75.2666117,
    "created_at": "2026-03-11T16:34:40.546235+00:00",
    "accuracy": 3,
    "elevation": 178,
    "ordinal": 144
  },
  {
    "id": 506,
    "latitude": -15.1715472,
    "longitude": -75.2666244,
    "created_at": "2026-03-11T16:35:11.752841+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 178,
    "ordinal": 145
  },
  {
    "id": 507,
    "latitude": -15.1717725,
    "longitude": -75.2659838,
    "created_at": "2026-03-11T16:39:15.605614+00:00",
    "accuracy": 18.1909999847412,
    "elevation": 155,
    "ordinal": 146
  },
  {
    "id": 508,
    "latitude": -15.1734135,
    "longitude": -75.2627436,
    "created_at": "2026-03-11T16:42:58.755653+00:00",
    "accuracy": 4.84700012207031,
    "elevation": 153,
    "ordinal": 147
  },
  {
    "id": 517,
    "latitude": -15.1598675,
    "longitude": -75.2864482,
    "created_at": "2026-03-11T16:45:47.678516+00:00",
    "accuracy": 4.7350001335144,
    "elevation": 137,
    "ordinal": 148
  },
  {
    "id": 519,
    "latitude": -15.1608634,
    "longitude": -75.2844246,
    "created_at": "2026-03-11T16:45:56.78627+00:00",
    "accuracy": 4.4210000038147,
    "elevation": 125,
    "ordinal": 149
  },
  {
    "id": 523,
    "latitude": -15.1608634,
    "longitude": -75.2844246,
    "created_at": "2026-03-11T16:45:57.598951+00:00",
    "accuracy": 4.4210000038147,
    "elevation": 125,
    "ordinal": 150
  },
  {
    "id": 527,
    "latitude": -15.1617146,
    "longitude": -75.2823913,
    "created_at": "2026-03-11T16:46:06.996443+00:00",
    "accuracy": 4.59200000762939,
    "elevation": 135,
    "ordinal": 151
  },
  {
    "id": 568,
    "latitude": -15.1617146,
    "longitude": -75.2823913,
    "created_at": "2026-03-11T16:46:12.675031+00:00",
    "accuracy": 4.59200000762939,
    "elevation": 135,
    "ordinal": 152
  },
  {
    "id": 580,
    "latitude": -15.1806044,
    "longitude": -75.2537514,
    "created_at": "2026-03-11T16:47:21.785209+00:00",
    "accuracy": 8.03499984741211,
    "elevation": 165,
    "ordinal": 153
  },
  {
    "id": 581,
    "latitude": -15.1805868,
    "longitude": -75.2537208,
    "created_at": "2026-03-11T16:48:44.92931+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165,
    "ordinal": 154
  },
  {
    "id": 582,
    "latitude": -15.1805812,
    "longitude": -75.2537165,
    "created_at": "2026-03-11T16:49:42.374445+00:00",
    "accuracy": 0.935000002384186,
    "elevation": 165,
    "ordinal": 155
  },
  {
    "id": 583,
    "latitude": -15.1805487,
    "longitude": -75.2536988,
    "created_at": "2026-03-11T16:49:42.647454+00:00",
    "accuracy": 3.06100010871887,
    "elevation": 165,
    "ordinal": 156
  },
  {
    "id": 584,
    "latitude": -15.1805501,
    "longitude": -75.2537039,
    "created_at": "2026-03-11T16:49:51.461401+00:00",
    "accuracy": 0.935000002384186,
    "elevation": 165,
    "ordinal": 157
  },
  {
    "id": 585,
    "latitude": -15.1805922,
    "longitude": -75.2537157,
    "created_at": "2026-03-11T16:49:56.975105+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165,
    "ordinal": 158
  },
  {
    "id": 586,
    "latitude": -15.1805566,
    "longitude": -75.253725,
    "created_at": "2026-03-11T16:49:57.488095+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165,
    "ordinal": 159
  },
  {
    "id": 587,
    "latitude": -15.1805868,
    "longitude": -75.2537208,
    "created_at": "2026-03-11T16:49:57.904858+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165,
    "ordinal": 160
  },
  {
    "id": 588,
    "latitude": -15.1805087,
    "longitude": -75.253723,
    "created_at": "2026-03-11T16:54:11.440854+00:00",
    "accuracy": 7.05700016021729,
    "elevation": 165,
    "ordinal": 161
  },
  {
    "id": 590,
    "latitude": -15.1816419,
    "longitude": -75.2515283,
    "created_at": "2026-03-11T16:54:23.933091+00:00",
    "accuracy": 4.59200000762939,
    "elevation": 158,
    "ordinal": 162
  },
  {
    "id": 592,
    "latitude": -15.1805602,
    "longitude": -75.2537212,
    "created_at": "2026-03-11T16:54:55.759086+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165,
    "ordinal": 163
  },
  {
    "id": 593,
    "latitude": -15.1805602,
    "longitude": -75.2537212,
    "created_at": "2026-03-11T16:54:56.322772+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165,
    "ordinal": 164
  },
  {
    "id": 594,
    "latitude": -15.1866425,
    "longitude": -75.2461724,
    "created_at": "2026-03-11T16:55:52.904339+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 101,
    "ordinal": 165
  },
  {
    "id": 595,
    "latitude": -15.1880626,
    "longitude": -75.245366,
    "created_at": "2026-03-11T16:56:53.154949+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 77,
    "ordinal": 166
  },
  {
    "id": 596,
    "latitude": -15.1915624,
    "longitude": -75.2435485,
    "created_at": "2026-03-11T16:58:53.291579+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 36,
    "ordinal": 167
  },
  {
    "id": 598,
    "latitude": -15.1912951,
    "longitude": -75.2449915,
    "created_at": "2026-03-11T16:59:52.852748+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 30,
    "ordinal": 168
  },
  {
    "id": 599,
    "latitude": -15.1894695,
    "longitude": -75.246898,
    "created_at": "2026-03-11T17:00:53.000419+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 29,
    "ordinal": 169
  },
  {
    "id": 600,
    "latitude": -15.1894711,
    "longitude": -75.2469751,
    "created_at": "2026-03-11T17:08:49.266222+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 29,
    "ordinal": 170
  },
  {
    "id": 601,
    "latitude": -15.1894711,
    "longitude": -75.2469751,
    "created_at": "2026-03-11T17:08:49.84673+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 29,
    "ordinal": 171
  },
  {
    "id": 602,
    "latitude": -15.190378,
    "longitude": -75.2468114,
    "created_at": "2026-03-11T17:09:16.704995+00:00",
    "accuracy": 3,
    "elevation": 0,
    "ordinal": 172
  },
  {
    "id": 603,
    "latitude": -15.1903876,
    "longitude": -75.2467866,
    "created_at": "2026-03-11T17:12:15.160748+00:00",
    "accuracy": 3,
    "elevation": 0,
    "ordinal": 173
  },
  {
    "id": 604,
    "latitude": -15.1904149,
    "longitude": -75.2467641,
    "created_at": "2026-03-11T17:12:59.044444+00:00",
    "accuracy": 3,
    "elevation": 0,
    "ordinal": 174
  },
  {
    "id": 605,
    "latitude": -15.1904149,
    "longitude": -75.2467641,
    "created_at": "2026-03-11T17:13:02.267985+00:00",
    "accuracy": 3,
    "elevation": 0,
    "ordinal": 175
  },
  {
    "id": 622,
    "latitude": -15.1894698,
    "longitude": -75.2469951,
    "created_at": "2026-03-11T17:13:05.458736+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 29,
    "ordinal": 176
  },
  {
    "id": 624,
    "latitude": -15.1895548,
    "longitude": -75.2470013,
    "created_at": "2026-03-11T17:13:05.970612+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 29,
    "ordinal": 177
  },
  {
    "id": 626,
    "latitude": -15.1895548,
    "longitude": -75.2470013,
    "created_at": "2026-03-11T17:13:06.390432+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 29,
    "ordinal": 178
  },
  {
    "id": 641,
    "latitude": -15.1902619,
    "longitude": -75.2466346,
    "created_at": "2026-03-11T17:14:00.362719+00:00",
    "accuracy": 3,
    "elevation": 26,
    "ordinal": 179
  },
  {
    "id": 642,
    "latitude": -15.1902437,
    "longitude": -75.2466273,
    "created_at": "2026-03-11T17:16:21.431471+00:00",
    "accuracy": 6.12200021743774,
    "elevation": 26,
    "ordinal": 180
  },
  {
    "id": 644,
    "latitude": -15.190131,
    "longitude": -75.2465251,
    "created_at": "2026-03-11T17:16:51.449781+00:00",
    "accuracy": 3,
    "elevation": 26,
    "ordinal": 181
  },
  {
    "id": 645,
    "latitude": -15.1901275,
    "longitude": -75.2465239,
    "created_at": "2026-03-11T17:17:51.476146+00:00",
    "accuracy": 3,
    "elevation": 26,
    "ordinal": 182
  },
  {
    "id": 646,
    "latitude": -15.1901326,
    "longitude": -75.2465754,
    "created_at": "2026-03-11T17:18:52.149445+00:00",
    "accuracy": 3.40100002288818,
    "elevation": 26,
    "ordinal": 183
  },
  {
    "id": 647,
    "latitude": -15.1901311,
    "longitude": -75.2465918,
    "created_at": "2026-03-11T17:19:51.893858+00:00",
    "accuracy": 3.125,
    "elevation": 26,
    "ordinal": 184
  },
  {
    "id": 648,
    "latitude": -15.1901414,
    "longitude": -75.2465877,
    "created_at": "2026-03-11T17:21:21.465774+00:00",
    "accuracy": 3.14599990844727,
    "elevation": 26,
    "ordinal": 185
  },
  {
    "id": 649,
    "latitude": -15.1902499,
    "longitude": -75.2466454,
    "created_at": "2026-03-11T17:21:52.232024+00:00",
    "accuracy": 2.93499994277954,
    "elevation": 26,
    "ordinal": 186
  },
  {
    "id": 650,
    "latitude": -15.1902501,
    "longitude": -75.2466457,
    "created_at": "2026-03-11T17:22:51.792085+00:00",
    "accuracy": 2.21000003814697,
    "elevation": 26,
    "ordinal": 187
  },
  {
    "id": 651,
    "latitude": -15.1902501,
    "longitude": -75.2466452,
    "created_at": "2026-03-11T17:23:51.956507+00:00",
    "accuracy": 1.87100005149841,
    "elevation": 26,
    "ordinal": 188
  },
  {
    "id": 652,
    "latitude": -15.1900758,
    "longitude": -75.246444,
    "created_at": "2026-03-11T17:29:07.403433+00:00",
    "accuracy": 3,
    "elevation": 26,
    "ordinal": 189
  },
  {
    "id": 653,
    "latitude": -15.1900765,
    "longitude": -75.2464444,
    "created_at": "2026-03-11T17:29:07.412353+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 26,
    "ordinal": 190
  },
  {
    "id": 654,
    "latitude": -15.192317,
    "longitude": -75.2443859,
    "created_at": "2026-03-11T17:35:31.224952+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 21,
    "ordinal": 191
  },
  {
    "id": 657,
    "latitude": -15.190374,
    "longitude": -75.2468161,
    "created_at": "2026-03-11T17:35:48.317652+00:00",
    "accuracy": 3,
    "elevation": 0,
    "ordinal": 192
  },
  {
    "id": 658,
    "latitude": -15.190374,
    "longitude": -75.2468161,
    "created_at": "2026-03-11T17:35:49.310405+00:00",
    "accuracy": 3,
    "elevation": 0,
    "ordinal": 193
  },
  {
    "id": 660,
    "latitude": -15.1963315,
    "longitude": -75.2409048,
    "created_at": "2026-03-11T17:37:04.965658+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 13,
    "ordinal": 194
  },
  {
    "id": 664,
    "latitude": -15.1965942,
    "longitude": -75.2399964,
    "created_at": "2026-03-11T17:38:52.06312+00:00",
    "accuracy": 3,
    "elevation": 32,
    "ordinal": 195
  },
  {
    "id": 693,
    "latitude": -15.1963176,
    "longitude": -75.2409142,
    "created_at": "2026-03-11T17:38:55.751251+00:00",
    "accuracy": 5.05499982833862,
    "elevation": 13,
    "ordinal": 196
  },
  {
    "id": 699,
    "latitude": -15.1963176,
    "longitude": -75.2409142,
    "created_at": "2026-03-11T17:38:56.737504+00:00",
    "accuracy": 5.05499982833862,
    "elevation": 13,
    "ordinal": 197
  },
  {
    "id": 701,
    "latitude": -15.1963176,
    "longitude": -75.2409142,
    "created_at": "2026-03-11T17:38:57.106565+00:00",
    "accuracy": 5.05499982833862,
    "elevation": 13,
    "ordinal": 198
  },
  {
    "id": 702,
    "latitude": -15.1977661,
    "longitude": -75.2390944,
    "created_at": "2026-03-11T17:43:16.437446+00:00",
    "accuracy": 3.01099991798401,
    "elevation": 27,
    "ordinal": 199
  },
  {
    "id": 705,
    "latitude": -15.1977273,
    "longitude": -75.2385896,
    "created_at": "2026-03-11T17:45:40.165362+00:00",
    "accuracy": 6.51399993896484,
    "elevation": 27,
    "ordinal": 200
  },
  {
    "id": 706,
    "latitude": -15.1970684,
    "longitude": -75.239746,
    "created_at": "2026-03-11T18:19:22.519094+00:00",
    "accuracy": 3.00999999046326,
    "elevation": 28,
    "ordinal": 201
  },
  {
    "id": 747,
    "latitude": -15.2869944,
    "longitude": -75.1895472,
    "created_at": "2026-03-11T18:20:51.64008+00:00",
    "accuracy": 4.25099992752075,
    "elevation": 84,
    "ordinal": 202
  },
  {
    "id": 748,
    "latitude": -15.2928875,
    "longitude": -75.1840136,
    "created_at": "2026-03-11T18:21:51.663918+00:00",
    "accuracy": 3.7409999370575,
    "elevation": 86,
    "ordinal": 203
  },
  {
    "id": 749,
    "latitude": -15.2947596,
    "longitude": -75.1824187,
    "created_at": "2026-03-11T18:22:52.182326+00:00",
    "accuracy": 4.25099992752075,
    "elevation": 87,
    "ordinal": 204
  },
  {
    "id": 750,
    "latitude": -15.3015664,
    "longitude": -75.1786058,
    "created_at": "2026-03-11T18:24:01.135795+00:00",
    "accuracy": 5.44199991226196,
    "elevation": 110,
    "ordinal": 205
  },
  {
    "id": 751,
    "latitude": -15.3037363,
    "longitude": -75.1712808,
    "created_at": "2026-03-11T18:24:51.468063+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 100,
    "ordinal": 206
  },
  {
    "id": 752,
    "latitude": -15.3051408,
    "longitude": -75.1689492,
    "created_at": "2026-03-11T18:25:51.651601+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 96,
    "ordinal": 207
  },
  {
    "id": 753,
    "latitude": -15.3051554,
    "longitude": -75.1689661,
    "created_at": "2026-03-11T18:26:51.704753+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 96,
    "ordinal": 208
  },
  {
    "id": 754,
    "latitude": -15.3051515,
    "longitude": -75.1689604,
    "created_at": "2026-03-11T18:27:51.654288+00:00",
    "accuracy": 0.509999990463257,
    "elevation": 96,
    "ordinal": 209
  },
  {
    "id": 755,
    "latitude": -15.3055657,
    "longitude": -75.1681907,
    "created_at": "2026-03-11T18:28:51.678226+00:00",
    "accuracy": 3.91100001335144,
    "elevation": 98,
    "ordinal": 210
  },
  {
    "id": 756,
    "latitude": -15.3090594,
    "longitude": -75.1622516,
    "created_at": "2026-03-11T18:29:51.616621+00:00",
    "accuracy": 3.7409999370575,
    "elevation": 94,
    "ordinal": 211
  },
  {
    "id": 757,
    "latitude": -15.3133936,
    "longitude": -75.1560717,
    "created_at": "2026-03-11T18:30:51.59421+00:00",
    "accuracy": 3.82599997520447,
    "elevation": 85,
    "ordinal": 212
  },
  {
    "id": 758,
    "latitude": -15.3193651,
    "longitude": -75.1513038,
    "created_at": "2026-03-11T18:31:51.569481+00:00",
    "accuracy": 4.16699981689453,
    "elevation": 83,
    "ordinal": 213
  },
  {
    "id": 759,
    "latitude": -15.3253062,
    "longitude": -75.1483403,
    "created_at": "2026-03-11T18:32:51.527746+00:00",
    "accuracy": 3.7409999370575,
    "elevation": 62,
    "ordinal": 214
  },
  {
    "id": 760,
    "latitude": -15.3329839,
    "longitude": -75.1467876,
    "created_at": "2026-03-11T18:33:52.061226+00:00",
    "accuracy": 3.65599989891052,
    "elevation": 54,
    "ordinal": 215
  },
  {
    "id": 761,
    "latitude": -15.3405865,
    "longitude": -75.1452361,
    "created_at": "2026-03-11T18:34:51.484506+00:00",
    "accuracy": 4.84700012207031,
    "elevation": 37,
    "ordinal": 216
  },
  {
    "id": 762,
    "latitude": -15.3461419,
    "longitude": -75.1442725,
    "created_at": "2026-03-11T18:35:51.568843+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 29,
    "ordinal": 217
  },
  {
    "id": 763,
    "latitude": -15.3520906,
    "longitude": -75.1463944,
    "created_at": "2026-03-11T18:36:51.542417+00:00",
    "accuracy": 8.38199996948242,
    "elevation": 27,
    "ordinal": 218
  },
  {
    "id": 764,
    "latitude": -15.3521356,
    "longitude": -75.1463581,
    "created_at": "2026-03-11T18:37:51.513784+00:00",
    "accuracy": 11.1020002365112,
    "elevation": 27,
    "ordinal": 219
  },
  {
    "id": 765,
    "latitude": -15.3532227,
    "longitude": -75.1476853,
    "created_at": "2026-03-11T18:38:51.484813+00:00",
    "accuracy": 3.91100001335144,
    "elevation": 18,
    "ordinal": 220
  },
  {
    "id": 766,
    "latitude": -15.3574815,
    "longitude": -75.1532002,
    "created_at": "2026-03-11T18:39:51.495079+00:00",
    "accuracy": 3.7409999370575,
    "elevation": 15,
    "ordinal": 221
  },
  {
    "id": 767,
    "latitude": -15.3600247,
    "longitude": -75.1571118,
    "created_at": "2026-03-11T18:40:51.501413+00:00",
    "accuracy": 3.69799995422363,
    "elevation": 18,
    "ordinal": 222
  },
  {
    "id": 768,
    "latitude": -15.3599948,
    "longitude": -75.1573485,
    "created_at": "2026-03-11T18:41:51.914687+00:00",
    "accuracy": 8.06099987030029,
    "elevation": 15,
    "ordinal": 223
  },
  {
    "id": 769,
    "latitude": -15.3608757,
    "longitude": -75.1585672,
    "created_at": "2026-03-11T18:42:51.68927+00:00",
    "accuracy": 3.65599989891052,
    "elevation": 12,
    "ordinal": 224
  },
  {
    "id": 770,
    "latitude": -15.3617383,
    "longitude": -75.1631884,
    "created_at": "2026-03-11T18:43:51.876631+00:00",
    "accuracy": 4.67700004577637,
    "elevation": 27,
    "ordinal": 225
  },
  {
    "id": 771,
    "latitude": -15.3617128,
    "longitude": -75.164545,
    "created_at": "2026-03-11T18:44:51.644368+00:00",
    "accuracy": 10.1389999389648,
    "elevation": 29,
    "ordinal": 226
  },
  {
    "id": 772,
    "latitude": -15.3616675,
    "longitude": -75.1669416,
    "created_at": "2026-03-11T18:45:51.579347+00:00",
    "accuracy": 12.4790000915527,
    "elevation": 36,
    "ordinal": 227
  },
  {
    "id": 773,
    "latitude": -15.3621969,
    "longitude": -75.1664884,
    "created_at": "2026-03-11T19:21:43.970232+00:00",
    "accuracy": 13.28600025177,
    "elevation": 31,
    "ordinal": 228
  }
];
