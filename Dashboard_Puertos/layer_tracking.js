// Archivo filtrado: Hoy >= 9:00 AM + Elevación MSNM
// Generado: 11/03/2026 17:39:34

const TRACKING_POINTS = [
  {
    "latitude": -15.0185675,
    "longitude": -75.0073524,
    "created_at": "2026-03-11T13:21:40.826962+00:00",
    "accuracy": 7.90799999237061,
    "elevation": 538.0,
    "ordinal": 1
  },
  {
    "latitude": -15.0300837,
    "longitude": -75.0072579,
    "created_at": "2026-03-11T13:22:46.558486+00:00",
    "accuracy": 9.4379997253418,
    "elevation": 562.0,
    "ordinal": 2
  },
  {
    "latitude": -15.0300837,
    "longitude": -75.0072579,
    "created_at": "2026-03-11T13:22:47.101877+00:00",
    "accuracy": 9.4379997253418,
    "elevation": 562.0,
    "ordinal": 3
  },
  {
    "latitude": -15.0415536,
    "longitude": -75.0064659,
    "created_at": "2026-03-11T13:27:13.607578+00:00",
    "accuracy": 7.99300003051758,
    "elevation": 557.0,
    "ordinal": 4
  },
  {
    "latitude": -15.048082,
    "longitude": -75.0058014,
    "created_at": "2026-03-11T13:27:13.928095+00:00",
    "accuracy": 3,
    "elevation": 552.0,
    "ordinal": 5
  },
  {
    "latitude": -15.0480501,
    "longitude": -75.0057185,
    "created_at": "2026-03-11T13:27:13.944132+00:00",
    "accuracy": 32.7379989624023,
    "elevation": 552.0,
    "ordinal": 6
  },
  {
    "latitude": -15.0481228,
    "longitude": -75.0058305,
    "created_at": "2026-03-11T13:27:13.95961+00:00",
    "accuracy": 3,
    "elevation": 552.0,
    "ordinal": 7
  },
  {
    "latitude": -15.0481039,
    "longitude": -75.0058654,
    "created_at": "2026-03-11T13:27:39.533109+00:00",
    "accuracy": 3,
    "elevation": 549.0,
    "ordinal": 8
  },
  {
    "latitude": -15.0480891,
    "longitude": -75.0058393,
    "created_at": "2026-03-11T13:28:41.923145+00:00",
    "accuracy": 3,
    "elevation": 552.0,
    "ordinal": 9
  },
  {
    "latitude": -15.0480803,
    "longitude": -75.0058507,
    "created_at": "2026-03-11T13:32:32.818351+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 549.0,
    "ordinal": 10
  },
  {
    "latitude": -15.0480828,
    "longitude": -75.0058429,
    "created_at": "2026-03-11T13:33:32.464306+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 549.0,
    "ordinal": 11
  },
  {
    "latitude": -15.0480706,
    "longitude": -75.0057646,
    "created_at": "2026-03-11T13:36:47.555621+00:00",
    "accuracy": 10.628999710083,
    "elevation": 552.0,
    "ordinal": 12
  },
  {
    "latitude": -15.0234138,
    "longitude": -75.0074381,
    "created_at": "2026-03-11T13:39:29.860332+00:00",
    "accuracy": 8.07800006866455,
    "elevation": 553.0,
    "ordinal": 13
  },
  {
    "latitude": -15.0480883,
    "longitude": -75.0058444,
    "created_at": "2026-03-11T13:39:30.463178+00:00",
    "accuracy": 3.01500010490417,
    "elevation": 549.0,
    "ordinal": 14
  },
  {
    "latitude": -15.0480804,
    "longitude": -75.0058407,
    "created_at": "2026-03-11T13:39:30.799248+00:00",
    "accuracy": 3.23099994659424,
    "elevation": 549.0,
    "ordinal": 15
  },
  {
    "latitude": -15.0480804,
    "longitude": -75.0058407,
    "created_at": "2026-03-11T13:39:31.34524+00:00",
    "accuracy": 3.06100010871887,
    "elevation": 549.0,
    "ordinal": 16
  },
  {
    "latitude": -15.0480826,
    "longitude": -75.0058465,
    "created_at": "2026-03-11T13:39:31.783148+00:00",
    "accuracy": 3.0789999961853,
    "elevation": 549.0,
    "ordinal": 17
  },
  {
    "latitude": -15.0480818,
    "longitude": -75.0058408,
    "created_at": "2026-03-11T13:39:32.369311+00:00",
    "accuracy": 3.7409999370575,
    "elevation": 549.0,
    "ordinal": 18
  },
  {
    "latitude": -15.0480533,
    "longitude": -75.0057795,
    "created_at": "2026-03-11T13:39:32.674339+00:00",
    "accuracy": 3.0460000038147,
    "elevation": 552.0,
    "ordinal": 19
  },
  {
    "latitude": -15.0480499,
    "longitude": -75.005781,
    "created_at": "2026-03-11T13:39:33.004518+00:00",
    "accuracy": 3,
    "elevation": 552.0,
    "ordinal": 20
  },
  {
    "latitude": -15.0480706,
    "longitude": -75.0057646,
    "created_at": "2026-03-11T13:39:33.29854+00:00",
    "accuracy": 10.628999710083,
    "elevation": 552.0,
    "ordinal": 21
  },
  {
    "latitude": -15.0424651,
    "longitude": -75.0063168,
    "created_at": "2026-03-11T13:39:33.639372+00:00",
    "accuracy": 13.6899995803833,
    "elevation": 554.0,
    "ordinal": 22
  },
  {
    "latitude": -15.0117585,
    "longitude": -75.0045111,
    "created_at": "2026-03-11T13:40:29.480982+00:00",
    "accuracy": 9.01299953460693,
    "elevation": 528.0,
    "ordinal": 23
  },
  {
    "latitude": -15.0010649,
    "longitude": -75.0003948,
    "created_at": "2026-03-11T13:41:29.298414+00:00",
    "accuracy": 8.50300025939941,
    "elevation": 526.0,
    "ordinal": 24
  },
  {
    "latitude": -14.9934271,
    "longitude": -74.9978192,
    "created_at": "2026-03-11T13:42:29.864551+00:00",
    "accuracy": 11.1759996414185,
    "elevation": 517.0,
    "ordinal": 25
  },
  {
    "latitude": -14.9930333,
    "longitude": -74.9980188,
    "created_at": "2026-03-11T13:43:29.328647+00:00",
    "accuracy": 8.8430004119873,
    "elevation": 515.0,
    "ordinal": 26
  },
  {
    "latitude": -14.9930948,
    "longitude": -74.998002,
    "created_at": "2026-03-11T13:44:29.49695+00:00",
    "accuracy": 3.71099996566772,
    "elevation": 515.0,
    "ordinal": 27
  },
  {
    "latitude": -14.993094,
    "longitude": -74.9980022,
    "created_at": "2026-03-11T13:45:29.62642+00:00",
    "accuracy": 3.40100002288818,
    "elevation": 515.0,
    "ordinal": 28
  },
  {
    "latitude": -14.9931054,
    "longitude": -74.9980104,
    "created_at": "2026-03-11T13:46:29.519472+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 515.0,
    "ordinal": 29
  },
  {
    "latitude": -14.993104,
    "longitude": -74.9980636,
    "created_at": "2026-03-11T13:47:29.336541+00:00",
    "accuracy": 3.07800006866455,
    "elevation": 515.0,
    "ordinal": 30
  },
  {
    "latitude": -14.9931016,
    "longitude": -74.998062,
    "created_at": "2026-03-11T13:48:29.315852+00:00",
    "accuracy": 4.50699996948242,
    "elevation": 515.0,
    "ordinal": 31
  },
  {
    "latitude": -14.9930939,
    "longitude": -74.9980393,
    "created_at": "2026-03-11T13:48:54.301038+00:00",
    "accuracy": 3,
    "elevation": 515.0,
    "ordinal": 32
  },
  {
    "latitude": -14.9931109,
    "longitude": -74.9980469,
    "created_at": "2026-03-11T13:48:54.691351+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515.0,
    "ordinal": 33
  },
  {
    "latitude": -14.993121,
    "longitude": -74.9980488,
    "created_at": "2026-03-11T13:48:55.13673+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515.0,
    "ordinal": 34
  },
  {
    "latitude": -14.9930711,
    "longitude": -74.9980467,
    "created_at": "2026-03-11T13:49:29.47788+00:00",
    "accuracy": 3,
    "elevation": 515.0,
    "ordinal": 35
  },
  {
    "latitude": -14.993138,
    "longitude": -74.9980031,
    "created_at": "2026-03-11T13:49:54.119261+00:00",
    "accuracy": 3.22499990463257,
    "elevation": 515.0,
    "ordinal": 36
  },
  {
    "latitude": -14.9931062,
    "longitude": -74.998029,
    "created_at": "2026-03-11T13:50:29.315147+00:00",
    "accuracy": 3.7960000038147,
    "elevation": 515.0,
    "ordinal": 37
  },
  {
    "latitude": -14.9931176,
    "longitude": -74.998013,
    "created_at": "2026-03-11T13:50:53.777207+00:00",
    "accuracy": 3,
    "elevation": 515.0,
    "ordinal": 38
  },
  {
    "latitude": -14.9931062,
    "longitude": -74.998029,
    "created_at": "2026-03-11T13:51:29.354303+00:00",
    "accuracy": 4.08199977874756,
    "elevation": 515.0,
    "ordinal": 39
  },
  {
    "latitude": -14.9931228,
    "longitude": -74.9979987,
    "created_at": "2026-03-11T13:51:53.538142+00:00",
    "accuracy": 3,
    "elevation": 515.0,
    "ordinal": 40
  },
  {
    "latitude": -14.9931062,
    "longitude": -74.998029,
    "created_at": "2026-03-11T13:52:29.344854+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 515.0,
    "ordinal": 41
  },
  {
    "latitude": -14.9931164,
    "longitude": -74.9979963,
    "created_at": "2026-03-11T13:52:53.729056+00:00",
    "accuracy": 3,
    "elevation": 515.0,
    "ordinal": 42
  },
  {
    "latitude": -14.9931062,
    "longitude": -74.998029,
    "created_at": "2026-03-11T13:53:29.526421+00:00",
    "accuracy": 5.78200006484985,
    "elevation": 515.0,
    "ordinal": 43
  },
  {
    "latitude": -14.9931151,
    "longitude": -74.998,
    "created_at": "2026-03-11T13:53:53.66409+00:00",
    "accuracy": 3,
    "elevation": 515.0,
    "ordinal": 44
  },
  {
    "latitude": -14.993118,
    "longitude": -74.9980275,
    "created_at": "2026-03-11T13:54:29.328216+00:00",
    "accuracy": 6.12200021743774,
    "elevation": 515.0,
    "ordinal": 45
  },
  {
    "latitude": -14.9931129,
    "longitude": -74.998001,
    "created_at": "2026-03-11T13:54:53.781386+00:00",
    "accuracy": 3,
    "elevation": 515.0,
    "ordinal": 46
  },
  {
    "latitude": -14.993118,
    "longitude": -74.9980275,
    "created_at": "2026-03-11T13:55:29.343012+00:00",
    "accuracy": 5.18699979782104,
    "elevation": 515.0,
    "ordinal": 47
  },
  {
    "latitude": -14.9930737,
    "longitude": -74.9980594,
    "created_at": "2026-03-11T13:55:53.561768+00:00",
    "accuracy": 3.81599998474121,
    "elevation": 515.0,
    "ordinal": 48
  },
  {
    "latitude": -14.9930747,
    "longitude": -74.998092,
    "created_at": "2026-03-11T13:56:16.865531+00:00",
    "accuracy": 3,
    "elevation": 515.0,
    "ordinal": 49
  },
  {
    "latitude": -15.0480837,
    "longitude": -75.0058387,
    "created_at": "2026-03-11T13:56:17.25405+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 552.0,
    "ordinal": 50
  },
  {
    "latitude": -14.9930727,
    "longitude": -74.9980731,
    "created_at": "2026-03-11T13:56:29.312758+00:00",
    "accuracy": 6.3769998550415,
    "elevation": 515.0,
    "ordinal": 51
  },
  {
    "latitude": -14.9930736,
    "longitude": -74.99806,
    "created_at": "2026-03-11T13:57:07.370709+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515.0,
    "ordinal": 52
  },
  {
    "latitude": -14.9930727,
    "longitude": -74.9980731,
    "created_at": "2026-03-11T13:57:29.305765+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 515.0,
    "ordinal": 53
  },
  {
    "latitude": -14.9930716,
    "longitude": -74.9980595,
    "created_at": "2026-03-11T13:57:53.453311+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515.0,
    "ordinal": 54
  },
  {
    "latitude": -14.9930727,
    "longitude": -74.9980731,
    "created_at": "2026-03-11T13:58:29.320061+00:00",
    "accuracy": 5.01700019836426,
    "elevation": 515.0,
    "ordinal": 55
  },
  {
    "latitude": -14.9930677,
    "longitude": -74.9980586,
    "created_at": "2026-03-11T13:58:53.911261+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515.0,
    "ordinal": 56
  },
  {
    "latitude": -14.991501,
    "longitude": -74.9991978,
    "created_at": "2026-03-11T13:59:29.318349+00:00",
    "accuracy": 6.3769998550415,
    "elevation": 508.0,
    "ordinal": 57
  },
  {
    "latitude": -14.9902423,
    "longitude": -75.0010029,
    "created_at": "2026-03-11T13:59:53.588959+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 502.0,
    "ordinal": 58
  },
  {
    "latitude": -14.9893595,
    "longitude": -75.0044282,
    "created_at": "2026-03-11T14:00:35.975265+00:00",
    "accuracy": 10.2889995574951,
    "elevation": 494.0,
    "ordinal": 59
  },
  {
    "latitude": -14.9894438,
    "longitude": -75.0066271,
    "created_at": "2026-03-11T14:01:05.130109+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 489.0,
    "ordinal": 60
  },
  {
    "latitude": -14.9881893,
    "longitude": -75.0097818,
    "created_at": "2026-03-11T14:01:41.960433+00:00",
    "accuracy": 4.76200008392334,
    "elevation": 482.0,
    "ordinal": 61
  },
  {
    "latitude": -14.9893595,
    "longitude": -75.0044282,
    "created_at": "2026-03-11T14:01:42.306173+00:00",
    "accuracy": 10.2889995574951,
    "elevation": 494.0,
    "ordinal": 62
  },
  {
    "latitude": -14.9890761,
    "longitude": -75.0113341,
    "created_at": "2026-03-11T14:01:54.643826+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 488.0,
    "ordinal": 63
  },
  {
    "latitude": -14.990074,
    "longitude": -75.0132911,
    "created_at": "2026-03-11T14:02:35.080509+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 492.0,
    "ordinal": 64
  },
  {
    "latitude": -14.990074,
    "longitude": -75.0132911,
    "created_at": "2026-03-11T14:02:48.178062+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 492.0,
    "ordinal": 65
  },
  {
    "latitude": -14.990074,
    "longitude": -75.0132911,
    "created_at": "2026-03-11T14:04:32.191358+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 492.0,
    "ordinal": 66
  },
  {
    "latitude": -14.9926892,
    "longitude": -75.0169998,
    "created_at": "2026-03-11T14:04:32.240508+00:00",
    "accuracy": 5.69700002670288,
    "elevation": 487.0,
    "ordinal": 67
  },
  {
    "latitude": -14.9954623,
    "longitude": -75.0208227,
    "created_at": "2026-03-11T14:04:32.241832+00:00",
    "accuracy": 5.18699979782104,
    "elevation": 486.0,
    "ordinal": 68
  },
  {
    "latitude": -14.9995368,
    "longitude": -75.0409901,
    "created_at": "2026-03-11T14:08:54.693312+00:00",
    "accuracy": 5.01700019836426,
    "elevation": 477.0,
    "ordinal": 69
  },
  {
    "latitude": -14.9988007,
    "longitude": -75.0353553,
    "created_at": "2026-03-11T14:08:54.710125+00:00",
    "accuracy": 4.76100015640259,
    "elevation": 482.0,
    "ordinal": 70
  },
  {
    "latitude": -14.9960813,
    "longitude": -75.0267312,
    "created_at": "2026-03-11T14:08:55.394994+00:00",
    "accuracy": 4.67600011825562,
    "elevation": 485.0,
    "ordinal": 71
  },
  {
    "latitude": -14.9960813,
    "longitude": -75.0267312,
    "created_at": "2026-03-11T14:08:55.398161+00:00",
    "accuracy": 4.67600011825562,
    "elevation": 485.0,
    "ordinal": 72
  },
  {
    "latitude": -14.9978397,
    "longitude": -75.0308667,
    "created_at": "2026-03-11T14:08:55.619214+00:00",
    "accuracy": 5.01700019836426,
    "elevation": 485.0,
    "ordinal": 73
  },
  {
    "latitude": -14.9978397,
    "longitude": -75.0308667,
    "created_at": "2026-03-11T14:08:55.632579+00:00",
    "accuracy": 5.01700019836426,
    "elevation": 485.0,
    "ordinal": 74
  },
  {
    "latitude": -15.0033885,
    "longitude": -75.0700428,
    "created_at": "2026-03-11T14:14:30.056142+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 484.0,
    "ordinal": 75
  },
  {
    "latitude": -14.9992398,
    "longitude": -75.0465943,
    "created_at": "2026-03-11T14:14:30.056528+00:00",
    "accuracy": 7.14200019836426,
    "elevation": 475.0,
    "ordinal": 76
  },
  {
    "latitude": -14.9992398,
    "longitude": -75.0465943,
    "created_at": "2026-03-11T14:14:30.537469+00:00",
    "accuracy": 7.14200019836426,
    "elevation": 475.0,
    "ordinal": 77
  },
  {
    "latitude": -14.9993793,
    "longitude": -75.0526611,
    "created_at": "2026-03-11T14:14:30.561056+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 475.0,
    "ordinal": 78
  },
  {
    "latitude": -14.9993793,
    "longitude": -75.0526611,
    "created_at": "2026-03-11T14:14:30.874171+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 475.0,
    "ordinal": 79
  },
  {
    "latitude": -15.0002529,
    "longitude": -75.0578248,
    "created_at": "2026-03-11T14:14:30.8847+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 476.0,
    "ordinal": 80
  },
  {
    "latitude": -15.0002529,
    "longitude": -75.0578248,
    "created_at": "2026-03-11T14:14:31.680122+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 476.0,
    "ordinal": 81
  },
  {
    "latitude": -15.0010572,
    "longitude": -75.0622265,
    "created_at": "2026-03-11T14:14:31.686516+00:00",
    "accuracy": 5.27199983596802,
    "elevation": 481.0,
    "ordinal": 82
  },
  {
    "latitude": -15.0010572,
    "longitude": -75.0622265,
    "created_at": "2026-03-11T14:14:32.149765+00:00",
    "accuracy": 5.27199983596802,
    "elevation": 481.0,
    "ordinal": 83
  },
  {
    "latitude": -15.0012955,
    "longitude": -75.0665667,
    "created_at": "2026-03-11T14:14:32.165112+00:00",
    "accuracy": 5.86700010299683,
    "elevation": 474.0,
    "ordinal": 84
  },
  {
    "latitude": -15.0012955,
    "longitude": -75.0665667,
    "created_at": "2026-03-11T14:14:32.558403+00:00",
    "accuracy": 5.86700010299683,
    "elevation": 474.0,
    "ordinal": 85
  },
  {
    "latitude": -15.0058763,
    "longitude": -75.0720749,
    "created_at": "2026-03-11T14:15:29.348937+00:00",
    "accuracy": 6.29199981689453,
    "elevation": 486.0,
    "ordinal": 86
  },
  {
    "latitude": -15.0099262,
    "longitude": -75.0735411,
    "created_at": "2026-03-11T14:16:29.555342+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 488.0,
    "ordinal": 87
  },
  {
    "latitude": -15.0097817,
    "longitude": -75.0735208,
    "created_at": "2026-03-11T14:16:32.77797+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 488.0,
    "ordinal": 88
  },
  {
    "latitude": -15.0118171,
    "longitude": -75.0743525,
    "created_at": "2026-03-11T14:17:23.413816+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 487.0,
    "ordinal": 89
  },
  {
    "latitude": -14.9890761,
    "longitude": -75.0113341,
    "created_at": "2026-03-11T14:17:28.51968+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 488.0,
    "ordinal": 90
  },
  {
    "latitude": -15.0151933,
    "longitude": -75.0756548,
    "created_at": "2026-03-11T14:17:29.320087+00:00",
    "accuracy": 6.20699977874756,
    "elevation": 488.0,
    "ordinal": 91
  },
  {
    "latitude": -14.9910276,
    "longitude": -75.01461,
    "created_at": "2026-03-11T14:17:35.579332+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 489.0,
    "ordinal": 92
  },
  {
    "latitude": -14.9937636,
    "longitude": -75.0181109,
    "created_at": "2026-03-11T14:17:50.775423+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 488.0,
    "ordinal": 93
  },
  {
    "latitude": -15.0172757,
    "longitude": -75.0763879,
    "created_at": "2026-03-11T14:17:53.494355+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 489.0,
    "ordinal": 94
  },
  {
    "latitude": -14.9958724,
    "longitude": -75.0233559,
    "created_at": "2026-03-11T14:18:09.661513+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 484.0,
    "ordinal": 95
  },
  {
    "latitude": -15.0200594,
    "longitude": -75.0775099,
    "created_at": "2026-03-11T14:18:29.341043+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 491.0,
    "ordinal": 96
  },
  {
    "latitude": -14.9890761,
    "longitude": -75.0113341,
    "created_at": "2026-03-11T14:18:30.868298+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 488.0,
    "ordinal": 97
  },
  {
    "latitude": -14.9971892,
    "longitude": -75.0286608,
    "created_at": "2026-03-11T14:18:34.470124+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 490.0,
    "ordinal": 98
  },
  {
    "latitude": -14.9910276,
    "longitude": -75.01461,
    "created_at": "2026-03-11T14:18:34.700084+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 489.0,
    "ordinal": 99
  },
  {
    "latitude": -14.9981784,
    "longitude": -75.0322612,
    "created_at": "2026-03-11T14:18:35.000593+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 489.0,
    "ordinal": 100
  },
  {
    "latitude": -14.9991684,
    "longitude": -75.0375795,
    "created_at": "2026-03-11T14:18:35.423139+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 482.0,
    "ordinal": 101
  },
  {
    "latitude": -14.9937636,
    "longitude": -75.0181109,
    "created_at": "2026-03-11T14:18:35.592006+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 488.0,
    "ordinal": 102
  },
  {
    "latitude": -14.9994188,
    "longitude": -75.0429126,
    "created_at": "2026-03-11T14:18:35.824834+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 476.0,
    "ordinal": 103
  },
  {
    "latitude": -14.9958724,
    "longitude": -75.0233559,
    "created_at": "2026-03-11T14:18:35.999251+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 484.0,
    "ordinal": 104
  },
  {
    "latitude": -14.9992923,
    "longitude": -75.0489857,
    "created_at": "2026-03-11T14:18:36.373977+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 477.0,
    "ordinal": 105
  },
  {
    "latitude": -14.9971892,
    "longitude": -75.0286608,
    "created_at": "2026-03-11T14:18:36.461673+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 490.0,
    "ordinal": 106
  },
  {
    "latitude": -14.9996462,
    "longitude": -75.0547005,
    "created_at": "2026-03-11T14:18:36.815426+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 479.0,
    "ordinal": 107
  },
  {
    "latitude": -14.9981784,
    "longitude": -75.0322612,
    "created_at": "2026-03-11T14:18:36.911324+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 489.0,
    "ordinal": 108
  },
  {
    "latitude": -15.0007457,
    "longitude": -75.0597736,
    "created_at": "2026-03-11T14:18:37.405414+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 479.0,
    "ordinal": 109
  },
  {
    "latitude": -14.9991684,
    "longitude": -75.0375795,
    "created_at": "2026-03-11T14:18:37.59747+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 482.0,
    "ordinal": 110
  },
  {
    "latitude": -15.0011994,
    "longitude": -75.0640258,
    "created_at": "2026-03-11T14:18:38.053901+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 478.0,
    "ordinal": 111
  },
  {
    "latitude": -14.9994188,
    "longitude": -75.0429126,
    "created_at": "2026-03-11T14:18:38.74655+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 476.0,
    "ordinal": 112
  },
  {
    "latitude": -15.0018298,
    "longitude": -75.0680238,
    "created_at": "2026-03-11T14:18:38.868788+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 474.0,
    "ordinal": 113
  },
  {
    "latitude": -14.9992923,
    "longitude": -75.0489857,
    "created_at": "2026-03-11T14:18:39.199674+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 477.0,
    "ordinal": 114
  },
  {
    "latitude": -15.003845,
    "longitude": -75.0714235,
    "created_at": "2026-03-11T14:18:39.342189+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 486.0,
    "ordinal": 115
  },
  {
    "latitude": -14.9996462,
    "longitude": -75.0547005,
    "created_at": "2026-03-11T14:18:39.632241+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 479.0,
    "ordinal": 116
  },
  {
    "latitude": -15.0074037,
    "longitude": -75.0726592,
    "created_at": "2026-03-11T14:18:39.764357+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 486.0,
    "ordinal": 117
  },
  {
    "latitude": -15.0007457,
    "longitude": -75.0597736,
    "created_at": "2026-03-11T14:18:40.15977+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 479.0,
    "ordinal": 118
  },
  {
    "latitude": -15.0011994,
    "longitude": -75.0640258,
    "created_at": "2026-03-11T14:18:40.606539+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 478.0,
    "ordinal": 119
  },
  {
    "latitude": -15.0018298,
    "longitude": -75.0680238,
    "created_at": "2026-03-11T14:18:40.985669+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 474.0,
    "ordinal": 120
  },
  {
    "latitude": -15.003845,
    "longitude": -75.0714235,
    "created_at": "2026-03-11T14:18:41.383623+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 486.0,
    "ordinal": 121
  },
  {
    "latitude": -15.0074037,
    "longitude": -75.0726592,
    "created_at": "2026-03-11T14:18:42.069345+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 486.0,
    "ordinal": 122
  },
  {
    "latitude": -15.0214135,
    "longitude": -75.0776804,
    "created_at": "2026-03-11T14:18:53.410788+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 493.0,
    "ordinal": 123
  },
  {
    "latitude": -15.0235884,
    "longitude": -75.0784739,
    "created_at": "2026-03-11T14:19:29.610072+00:00",
    "accuracy": 6.03700017929077,
    "elevation": 496.0,
    "ordinal": 124
  },
  {
    "latitude": -15.0234689,
    "longitude": -75.0784464,
    "created_at": "2026-03-11T14:19:47.344069+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 496.0,
    "ordinal": 125
  },
  {
    "latitude": -15.0234689,
    "longitude": -75.0784464,
    "created_at": "2026-03-11T14:20:04.283737+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 496.0,
    "ordinal": 126
  },
  {
    "latitude": -15.0142574,
    "longitude": -75.0753353,
    "created_at": "2026-03-11T14:20:08.488455+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 488.0,
    "ordinal": 127
  },
  {
    "latitude": -15.0142574,
    "longitude": -75.0753353,
    "created_at": "2026-03-11T14:20:16.742217+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 488.0,
    "ordinal": 128
  },
  {
    "latitude": -15.027724,
    "longitude": -75.0800133,
    "created_at": "2026-03-11T14:20:28.072136+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 506.0,
    "ordinal": 129
  },
  {
    "latitude": -15.0278738,
    "longitude": -75.0800595,
    "created_at": "2026-03-11T14:20:30.403155+00:00",
    "accuracy": 4.84700012207031,
    "elevation": 506.0,
    "ordinal": 130
  },
  {
    "latitude": -15.0252394,
    "longitude": -75.0791112,
    "created_at": "2026-03-11T14:20:43.779+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 500.0,
    "ordinal": 131
  },
  {
    "latitude": -15.0294642,
    "longitude": -75.0806539,
    "created_at": "2026-03-11T14:20:53.335533+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 509.0,
    "ordinal": 132
  },
  {
    "latitude": -15.0319001,
    "longitude": -75.0815559,
    "created_at": "2026-03-11T14:21:28.065325+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 515.0,
    "ordinal": 133
  },
  {
    "latitude": -15.0320375,
    "longitude": -75.0815768,
    "created_at": "2026-03-11T14:21:29.330681+00:00",
    "accuracy": 4.76100015640259,
    "elevation": 515.0,
    "ordinal": 134
  },
  {
    "latitude": -15.0337822,
    "longitude": -75.082274,
    "created_at": "2026-03-11T14:21:53.487881+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 521.0,
    "ordinal": 135
  },
  {
    "latitude": -15.0361292,
    "longitude": -75.0831557,
    "created_at": "2026-03-11T14:22:29.698072+00:00",
    "accuracy": 4.84700012207031,
    "elevation": 526.0,
    "ordinal": 136
  },
  {
    "latitude": -15.0359991,
    "longitude": -75.0831098,
    "created_at": "2026-03-11T14:22:31.106324+00:00",
    "accuracy": 4.38000011444092,
    "elevation": 526.0,
    "ordinal": 137
  },
  {
    "latitude": -15.0378563,
    "longitude": -75.0838202,
    "created_at": "2026-03-11T14:22:54.329113+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 533.0,
    "ordinal": 138
  },
  {
    "latitude": -15.038663,
    "longitude": -75.0840703,
    "created_at": "2026-03-11T14:23:30.385178+00:00",
    "accuracy": 5.44199991226196,
    "elevation": 535.0,
    "ordinal": 139
  },
  {
    "latitude": -15.0402869,
    "longitude": -75.0846979,
    "created_at": "2026-03-11T14:23:54.033985+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 541.0,
    "ordinal": 140
  },
  {
    "latitude": -15.0373094,
    "longitude": -75.0836222,
    "created_at": "2026-03-11T14:23:58.136588+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 530.0,
    "ordinal": 141
  },
  {
    "latitude": -15.0433906,
    "longitude": -75.0858041,
    "created_at": "2026-03-11T14:24:29.701653+00:00",
    "accuracy": 4.42199993133545,
    "elevation": 551.0,
    "ordinal": 142
  },
  {
    "latitude": -15.0455219,
    "longitude": -75.0867391,
    "created_at": "2026-03-11T14:24:54.415712+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 560.0,
    "ordinal": 143
  },
  {
    "latitude": -15.047562,
    "longitude": -75.0877209,
    "created_at": "2026-03-11T14:25:29.354726+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 566.0,
    "ordinal": 144
  },
  {
    "latitude": -15.0491536,
    "longitude": -75.0884712,
    "created_at": "2026-03-11T14:25:53.376281+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 570.0,
    "ordinal": 145
  },
  {
    "latitude": -15.0514655,
    "longitude": -75.0900743,
    "created_at": "2026-03-11T14:26:29.337174+00:00",
    "accuracy": 5.35699987411499,
    "elevation": 583.0,
    "ordinal": 146
  },
  {
    "latitude": -15.0525621,
    "longitude": -75.0912095,
    "created_at": "2026-03-11T14:27:15.886682+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 589.0,
    "ordinal": 147
  },
  {
    "latitude": -15.0451638,
    "longitude": -75.0865947,
    "created_at": "2026-03-11T14:27:16.293726+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 557.0,
    "ordinal": 148
  },
  {
    "latitude": -15.0481982,
    "longitude": -75.0880442,
    "created_at": "2026-03-11T14:27:16.669699+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 566.0,
    "ordinal": 149
  },
  {
    "latitude": -15.0547875,
    "longitude": -75.0933718,
    "created_at": "2026-03-11T14:27:29.626286+00:00",
    "accuracy": 4.76200008392334,
    "elevation": 597.0,
    "ordinal": 150
  },
  {
    "latitude": -15.0575212,
    "longitude": -75.0963018,
    "created_at": "2026-03-11T14:28:29.726097+00:00",
    "accuracy": 6.40799999237061,
    "elevation": 617.0,
    "ordinal": 151
  },
  {
    "latitude": -15.0597823,
    "longitude": -75.0989245,
    "created_at": "2026-03-11T14:29:29.415894+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 630.0,
    "ordinal": 152
  },
  {
    "latitude": -15.0491536,
    "longitude": -75.0884712,
    "created_at": "2026-03-11T14:29:54.332816+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 570.0,
    "ordinal": 153
  },
  {
    "latitude": -15.0607546,
    "longitude": -75.1001231,
    "created_at": "2026-03-11T14:29:58.165082+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 638.0,
    "ordinal": 154
  },
  {
    "latitude": -15.0622711,
    "longitude": -75.1019492,
    "created_at": "2026-03-11T14:30:29.518368+00:00",
    "accuracy": 5.18699979782104,
    "elevation": 651.0,
    "ordinal": 155
  },
  {
    "latitude": -15.0632079,
    "longitude": -75.1029359,
    "created_at": "2026-03-11T14:30:58.602389+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 659.0,
    "ordinal": 156
  },
  {
    "latitude": -15.0491536,
    "longitude": -75.0884712,
    "created_at": "2026-03-11T14:31:01.635918+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 570.0,
    "ordinal": 157
  },
  {
    "latitude": -15.0527659,
    "longitude": -75.0914071,
    "created_at": "2026-03-11T14:31:05.563733+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 589.0,
    "ordinal": 158
  },
  {
    "latitude": -15.0555968,
    "longitude": -75.0944164,
    "created_at": "2026-03-11T14:31:07.093539+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 601.0,
    "ordinal": 159
  },
  {
    "latitude": -15.0584185,
    "longitude": -75.0972667,
    "created_at": "2026-03-11T14:31:09.938554+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 623.0,
    "ordinal": 160
  },
  {
    "latitude": -15.0607546,
    "longitude": -75.1001231,
    "created_at": "2026-03-11T14:31:16.130751+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 638.0,
    "ordinal": 161
  },
  {
    "latitude": -15.0645468,
    "longitude": -75.1045827,
    "created_at": "2026-03-11T14:31:30.044939+00:00",
    "accuracy": 5.01700019836426,
    "elevation": 674.0,
    "ordinal": 162
  },
  {
    "latitude": -15.065509,
    "longitude": -75.1057703,
    "created_at": "2026-03-11T14:31:56.517713+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 681.0,
    "ordinal": 163
  },
  {
    "latitude": -15.0669944,
    "longitude": -75.1075799,
    "created_at": "2026-03-11T14:32:29.329571+00:00",
    "accuracy": 4.33699989318848,
    "elevation": 702.0,
    "ordinal": 164
  },
  {
    "latitude": -15.0679128,
    "longitude": -75.1087222,
    "created_at": "2026-03-11T14:32:54.793342+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 707.0,
    "ordinal": 165
  },
  {
    "latitude": -15.0601509,
    "longitude": -75.0993801,
    "created_at": "2026-03-11T14:33:01.87636+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 633.0,
    "ordinal": 166
  },
  {
    "latitude": -15.0601509,
    "longitude": -75.0993801,
    "created_at": "2026-03-11T14:33:01.88949+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 633.0,
    "ordinal": 167
  },
  {
    "latitude": -15.0543338,
    "longitude": -75.0929908,
    "created_at": "2026-03-11T14:33:02.743604+00:00",
    "accuracy": 3.87700009346008,
    "elevation": 595.0,
    "ordinal": 168
  },
  {
    "latitude": -15.0543338,
    "longitude": -75.0929908,
    "created_at": "2026-03-11T14:33:02.800804+00:00",
    "accuracy": 3.87700009346008,
    "elevation": 595.0,
    "ordinal": 169
  },
  {
    "latitude": -15.0562679,
    "longitude": -75.0951247,
    "created_at": "2026-03-11T14:33:03.288527+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 607.0,
    "ordinal": 170
  },
  {
    "latitude": -15.0562679,
    "longitude": -75.0951247,
    "created_at": "2026-03-11T14:33:03.300041+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 607.0,
    "ordinal": 171
  },
  {
    "latitude": -15.0601509,
    "longitude": -75.0993801,
    "created_at": "2026-03-11T14:33:03.749442+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 633.0,
    "ordinal": 172
  },
  {
    "latitude": -15.0601509,
    "longitude": -75.0993801,
    "created_at": "2026-03-11T14:33:03.758527+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 633.0,
    "ordinal": 173
  },
  {
    "latitude": -15.0690716,
    "longitude": -75.1101336,
    "created_at": "2026-03-11T14:33:29.512099+00:00",
    "accuracy": 4.67700004577637,
    "elevation": 721.0,
    "ordinal": 174
  },
  {
    "latitude": -15.0697739,
    "longitude": -75.1113863,
    "created_at": "2026-03-11T14:33:58.862567+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 724.0,
    "ordinal": 175
  },
  {
    "latitude": -15.0760981,
    "longitude": -75.1194646,
    "created_at": "2026-03-11T14:37:07.573067+00:00",
    "accuracy": 4.33799982070923,
    "elevation": 784.0,
    "ordinal": 176
  },
  {
    "latitude": -15.0697782,
    "longitude": -75.1114149,
    "created_at": "2026-03-11T14:37:07.988206+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 724.0,
    "ordinal": 177
  },
  {
    "latitude": -15.0704765,
    "longitude": -75.1133344,
    "created_at": "2026-03-11T14:37:08.401297+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 729.0,
    "ordinal": 178
  },
  {
    "latitude": -15.0721213,
    "longitude": -75.1162105,
    "created_at": "2026-03-11T14:37:08.794178+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 746.0,
    "ordinal": 179
  },
  {
    "latitude": -15.0728344,
    "longitude": -75.1170456,
    "created_at": "2026-03-11T14:38:58.061864+00:00",
    "accuracy": 4.42199993133545,
    "elevation": 753.0,
    "ordinal": 180
  },
  {
    "latitude": -15.0760957,
    "longitude": -75.1194382,
    "created_at": "2026-03-11T14:38:58.063325+00:00",
    "accuracy": 7.15999984741211,
    "elevation": 784.0,
    "ordinal": 181
  },
  {
    "latitude": -15.0760697,
    "longitude": -75.1194195,
    "created_at": "2026-03-11T14:38:58.087829+00:00",
    "accuracy": 2.72099995613098,
    "elevation": 784.0,
    "ordinal": 182
  },
  {
    "latitude": -15.0718399,
    "longitude": -75.1158578,
    "created_at": "2026-03-11T14:38:58.121444+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 746.0,
    "ordinal": 183
  },
  {
    "latitude": -15.0705199,
    "longitude": -75.1134803,
    "created_at": "2026-03-11T14:38:58.520747+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 733.0,
    "ordinal": 184
  },
  {
    "latitude": -15.0705199,
    "longitude": -75.1134803,
    "created_at": "2026-03-11T14:38:58.539442+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 733.0,
    "ordinal": 185
  },
  {
    "latitude": -15.0705199,
    "longitude": -75.1134803,
    "created_at": "2026-03-11T14:38:58.540897+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 733.0,
    "ordinal": 186
  },
  {
    "latitude": -15.0705199,
    "longitude": -75.1134803,
    "created_at": "2026-03-11T14:38:58.631604+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 733.0,
    "ordinal": 187
  },
  {
    "latitude": -15.0760524,
    "longitude": -75.1194066,
    "created_at": "2026-03-11T14:38:58.823126+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 784.0,
    "ordinal": 188
  },
  {
    "latitude": -15.0760524,
    "longitude": -75.1194066,
    "created_at": "2026-03-11T14:38:58.830945+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 784.0,
    "ordinal": 189
  },
  {
    "latitude": -15.0760524,
    "longitude": -75.1194066,
    "created_at": "2026-03-11T14:38:58.83348+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 784.0,
    "ordinal": 190
  },
  {
    "latitude": -15.0760524,
    "longitude": -75.1194066,
    "created_at": "2026-03-11T14:38:58.918237+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 784.0,
    "ordinal": 191
  },
  {
    "latitude": -15.076083,
    "longitude": -75.1194116,
    "created_at": "2026-03-11T14:39:51.490581+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 784.0,
    "ordinal": 192
  },
  {
    "latitude": -15.0796351,
    "longitude": -75.1238428,
    "created_at": "2026-03-11T14:42:13.159498+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 797.0,
    "ordinal": 193
  },
  {
    "latitude": -15.0772694,
    "longitude": -75.1206196,
    "created_at": "2026-03-11T14:42:13.159521+00:00",
    "accuracy": 4.67600011825562,
    "elevation": 790.0,
    "ordinal": 194
  },
  {
    "latitude": -15.076083,
    "longitude": -75.1194164,
    "created_at": "2026-03-11T14:42:26.467448+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 784.0,
    "ordinal": 195
  },
  {
    "latitude": -15.076083,
    "longitude": -75.1194164,
    "created_at": "2026-03-11T14:42:33.422813+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 784.0,
    "ordinal": 196
  },
  {
    "latitude": -15.0823771,
    "longitude": -75.1258787,
    "created_at": "2026-03-11T14:42:47.259807+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 826.0,
    "ordinal": 197
  },
  {
    "latitude": -15.0830036,
    "longitude": -75.1263857,
    "created_at": "2026-03-11T14:43:10.027242+00:00",
    "accuracy": 4.42199993133545,
    "elevation": 825.0,
    "ordinal": 198
  },
  {
    "latitude": -15.0863602,
    "longitude": -75.1291683,
    "created_at": "2026-03-11T14:43:51.483106+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 848.0,
    "ordinal": 199
  },
  {
    "latitude": -15.0864937,
    "longitude": -75.1292676,
    "created_at": "2026-03-11T14:43:53.824719+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 849.0,
    "ordinal": 200
  },
  {
    "latitude": -15.0707101,
    "longitude": -75.1142385,
    "created_at": "2026-03-11T14:43:54.239886+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 737.0,
    "ordinal": 201
  },
  {
    "latitude": -15.0729444,
    "longitude": -75.1171671,
    "created_at": "2026-03-11T14:43:54.632764+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 753.0,
    "ordinal": 202
  },
  {
    "latitude": -15.076097,
    "longitude": -75.1194516,
    "created_at": "2026-03-11T14:43:54.965514+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 784.0,
    "ordinal": 203
  },
  {
    "latitude": -15.076088,
    "longitude": -75.1194444,
    "created_at": "2026-03-11T14:43:55.26642+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 784.0,
    "ordinal": 204
  },
  {
    "latitude": -15.076087,
    "longitude": -75.1194412,
    "created_at": "2026-03-11T14:43:55.6762+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 784.0,
    "ordinal": 205
  },
  {
    "latitude": -15.0760857,
    "longitude": -75.1194404,
    "created_at": "2026-03-11T14:43:56.083205+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 784.0,
    "ordinal": 206
  },
  {
    "latitude": -15.0773397,
    "longitude": -75.1207178,
    "created_at": "2026-03-11T14:43:56.416155+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 790.0,
    "ordinal": 207
  },
  {
    "latitude": -15.0797657,
    "longitude": -75.1239509,
    "created_at": "2026-03-11T14:43:56.783435+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 797.0,
    "ordinal": 208
  },
  {
    "latitude": -15.0831395,
    "longitude": -75.1264873,
    "created_at": "2026-03-11T14:43:57.193066+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 825.0,
    "ordinal": 209
  },
  {
    "latitude": -15.0902774,
    "longitude": -75.1320566,
    "created_at": "2026-03-11T14:44:51.831784+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 879.0,
    "ordinal": 210
  },
  {
    "latitude": -15.0940764,
    "longitude": -75.134046,
    "created_at": "2026-03-11T14:46:49.070115+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866.0,
    "ordinal": 211
  },
  {
    "latitude": -15.0831375,
    "longitude": -75.1265141,
    "created_at": "2026-03-11T14:46:49.514416+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 825.0,
    "ordinal": 212
  },
  {
    "latitude": -15.089696,
    "longitude": -75.1315526,
    "created_at": "2026-03-11T14:46:49.844701+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 872.0,
    "ordinal": 213
  },
  {
    "latitude": -15.0929462,
    "longitude": -75.1336962,
    "created_at": "2026-03-11T14:46:50.175725+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 872.0,
    "ordinal": 214
  },
  {
    "latitude": -15.0940746,
    "longitude": -75.1340491,
    "created_at": "2026-03-11T14:48:28.813102+00:00",
    "accuracy": 212.511001586914,
    "elevation": 866.0,
    "ordinal": 215
  },
  {
    "latitude": -15.0940636,
    "longitude": -75.1340672,
    "created_at": "2026-03-11T14:48:57.044623+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866.0,
    "ordinal": 216
  },
  {
    "latitude": -15.0953059,
    "longitude": -75.1362746,
    "created_at": "2026-03-11T14:49:58.738143+00:00",
    "accuracy": 58.2949981689453,
    "elevation": 880.0,
    "ordinal": 217
  },
  {
    "latitude": -15.0979428,
    "longitude": -75.14093,
    "created_at": "2026-03-11T14:51:00.519871+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 858.0,
    "ordinal": 218
  },
  {
    "latitude": -15.0979428,
    "longitude": -75.14093,
    "created_at": "2026-03-11T15:22:44.808176+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 858.0,
    "ordinal": 219
  },
  {
    "latitude": -15.1178309,
    "longitude": -75.176002,
    "created_at": "2026-03-11T15:22:46.269921+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 753.0,
    "ordinal": 220
  },
  {
    "latitude": -15.1218672,
    "longitude": -75.1830988,
    "created_at": "2026-03-11T15:50:03.985163+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 741.0,
    "ordinal": 221
  },
  {
    "latitude": -15.1221298,
    "longitude": -75.1930367,
    "created_at": "2026-03-11T15:50:05.418657+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 725.0,
    "ordinal": 222
  },
  {
    "latitude": -15.1239449,
    "longitude": -75.2004569,
    "created_at": "2026-03-11T15:50:05.892602+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 709.0,
    "ordinal": 223
  },
  {
    "latitude": -15.1265355,
    "longitude": -75.2073002,
    "created_at": "2026-03-11T15:50:06.372618+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 698.0,
    "ordinal": 224
  },
  {
    "latitude": -15.1267661,
    "longitude": -75.2084957,
    "created_at": "2026-03-11T15:50:06.890212+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 696.0,
    "ordinal": 225
  },
  {
    "latitude": -15.1267661,
    "longitude": -75.2084957,
    "created_at": "2026-03-11T15:50:07.374135+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 696.0,
    "ordinal": 226
  },
  {
    "latitude": -15.1340636,
    "longitude": -75.2353938,
    "created_at": "2026-03-11T15:50:09.018813+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 636.0,
    "ordinal": 227
  },
  {
    "latitude": -15.1340636,
    "longitude": -75.2353938,
    "created_at": "2026-03-11T15:50:09.464145+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 636.0,
    "ordinal": 228
  },
  {
    "latitude": -15.1410851,
    "longitude": -75.2797809,
    "created_at": "2026-03-11T15:50:45.681033+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 441.0,
    "ordinal": 229
  },
  {
    "latitude": -15.1408076,
    "longitude": -75.2837356,
    "created_at": "2026-03-11T15:52:39.7585+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 436.0,
    "ordinal": 230
  },
  {
    "latitude": -15.0938364,
    "longitude": -75.1340183,
    "created_at": "2026-03-11T15:52:42.232268+00:00",
    "accuracy": 5.9520001411438,
    "elevation": 866.0,
    "ordinal": 231
  },
  {
    "latitude": -15.0940376,
    "longitude": -75.1340803,
    "created_at": "2026-03-11T15:52:45.92116+00:00",
    "accuracy": 3.65599989891052,
    "elevation": 866.0,
    "ordinal": 232
  },
  {
    "latitude": -15.0940376,
    "longitude": -75.1340803,
    "created_at": "2026-03-11T15:52:46.877106+00:00",
    "accuracy": 5.18699979782104,
    "elevation": 866.0,
    "ordinal": 233
  },
  {
    "latitude": -15.0940299,
    "longitude": -75.1340497,
    "created_at": "2026-03-11T15:52:48.295762+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 866.0,
    "ordinal": 234
  },
  {
    "latitude": -15.0951302,
    "longitude": -75.13595,
    "created_at": "2026-03-11T15:52:58.392936+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 880.0,
    "ordinal": 235
  },
  {
    "latitude": -15.142121,
    "longitude": -75.2864545,
    "created_at": "2026-03-11T15:52:58.700264+00:00",
    "accuracy": 4.33599996566772,
    "elevation": 423.0,
    "ordinal": 236
  },
  {
    "latitude": -15.0978599,
    "longitude": -75.140769,
    "created_at": "2026-03-11T15:52:59.709135+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 865.0,
    "ordinal": 237
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:03.811693+00:00",
    "accuracy": 4.08199977874756,
    "elevation": 845.0,
    "ordinal": 238
  },
  {
    "latitude": -15.0938364,
    "longitude": -75.1340183,
    "created_at": "2026-03-11T15:53:03.821959+00:00",
    "accuracy": 5.9520001411438,
    "elevation": 866.0,
    "ordinal": 239
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:04.463279+00:00",
    "accuracy": 4.2519998550415,
    "elevation": 845.0,
    "ordinal": 240
  },
  {
    "latitude": -15.0940376,
    "longitude": -75.1340803,
    "created_at": "2026-03-11T15:53:04.470016+00:00",
    "accuracy": 3.65599989891052,
    "elevation": 866.0,
    "ordinal": 241
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:05.116765+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 845.0,
    "ordinal": 242
  },
  {
    "latitude": -15.0940376,
    "longitude": -75.1340803,
    "created_at": "2026-03-11T15:53:05.132685+00:00",
    "accuracy": 5.18699979782104,
    "elevation": 866.0,
    "ordinal": 243
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:05.355768+00:00",
    "accuracy": 2.80599999427795,
    "elevation": 845.0,
    "ordinal": 244
  },
  {
    "latitude": -15.0940299,
    "longitude": -75.1340497,
    "created_at": "2026-03-11T15:53:05.502+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 866.0,
    "ordinal": 245
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:06.251139+00:00",
    "accuracy": 2.9760000705719,
    "elevation": 845.0,
    "ordinal": 246
  },
  {
    "latitude": -15.0951302,
    "longitude": -75.13595,
    "created_at": "2026-03-11T15:53:06.287372+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 880.0,
    "ordinal": 247
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:06.507306+00:00",
    "accuracy": 2.72099995613098,
    "elevation": 845.0,
    "ordinal": 248
  },
  {
    "latitude": -15.0978599,
    "longitude": -75.140769,
    "created_at": "2026-03-11T15:53:06.536469+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 865.0,
    "ordinal": 249
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:07.217347+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 250
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:07.246959+00:00",
    "accuracy": 4.08199977874756,
    "elevation": 845.0,
    "ordinal": 251
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:07.453056+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 252
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:07.494962+00:00",
    "accuracy": 4.2519998550415,
    "elevation": 845.0,
    "ordinal": 253
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:07.699717+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 254
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:07.759447+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 845.0,
    "ordinal": 255
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:07.995327+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 256
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:08.32413+00:00",
    "accuracy": 2.80599999427795,
    "elevation": 845.0,
    "ordinal": 257
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:08.404367+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 258
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:08.612286+00:00",
    "accuracy": 2.9760000705719,
    "elevation": 845.0,
    "ordinal": 259
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:08.643127+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 260
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:09.075229+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 261
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:09.080513+00:00",
    "accuracy": 2.72099995613098,
    "elevation": 845.0,
    "ordinal": 262
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:09.320713+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 263
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:09.346267+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 264
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:09.564018+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 265
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:09.589717+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 266
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:09.817318+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 267
  },
  {
    "latitude": -15.098609,
    "longitude": -75.1421345,
    "created_at": "2026-03-11T15:53:09.835573+00:00",
    "accuracy": 0.509999990463257,
    "elevation": 845.0,
    "ordinal": 268
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:10.06337+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 269
  },
  {
    "latitude": -15.098609,
    "longitude": -75.1421345,
    "created_at": "2026-03-11T15:53:10.083681+00:00",
    "accuracy": 0.509999990463257,
    "elevation": 845.0,
    "ordinal": 270
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:10.344016+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 271
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:10.347617+00:00",
    "accuracy": 0.509999990463257,
    "elevation": 845.0,
    "ordinal": 272
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:10.902476+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 273
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:10.918515+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 274
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:11.174632+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 275
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:11.188502+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 276
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:11.420841+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 277
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:11.437956+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 278
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:11.692932+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 279
  },
  {
    "latitude": -15.0986115,
    "longitude": -75.1421255,
    "created_at": "2026-03-11T15:53:11.702533+00:00",
    "accuracy": 2.55100011825562,
    "elevation": 845.0,
    "ordinal": 280
  },
  {
    "latitude": -15.098609,
    "longitude": -75.1421345,
    "created_at": "2026-03-11T15:53:12.217799+00:00",
    "accuracy": 0.509999990463257,
    "elevation": 845.0,
    "ordinal": 281
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:12.225609+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 282
  },
  {
    "latitude": -15.098609,
    "longitude": -75.1421345,
    "created_at": "2026-03-11T15:53:12.459655+00:00",
    "accuracy": 0.509999990463257,
    "elevation": 845.0,
    "ordinal": 283
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:12.476902+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 284
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:12.73+00:00",
    "accuracy": 0.509999990463257,
    "elevation": 845.0,
    "ordinal": 285
  },
  {
    "latitude": -15.0985956,
    "longitude": -75.1421309,
    "created_at": "2026-03-11T15:53:12.738183+00:00",
    "accuracy": 1.10500001907349,
    "elevation": 845.0,
    "ordinal": 286
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:12.983666+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 287
  },
  {
    "latitude": -15.0986035,
    "longitude": -75.1421307,
    "created_at": "2026-03-11T15:53:13.016662+00:00",
    "accuracy": 0.509999990463257,
    "elevation": 845.0,
    "ordinal": 288
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:13.481227+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 289
  },
  {
    "latitude": -15.0986241,
    "longitude": -75.1421564,
    "created_at": "2026-03-11T15:53:13.488311+00:00",
    "accuracy": 1.87000000476837,
    "elevation": 845.0,
    "ordinal": 290
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:13.729218+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 291
  },
  {
    "latitude": -15.1013256,
    "longitude": -75.1469009,
    "created_at": "2026-03-11T15:53:13.736724+00:00",
    "accuracy": 5.52699995040894,
    "elevation": 798.0,
    "ordinal": 292
  },
  {
    "latitude": -15.1056429,
    "longitude": -75.1545271,
    "created_at": "2026-03-11T15:53:13.990213+00:00",
    "accuracy": 5.78200006484985,
    "elevation": 758.0,
    "ordinal": 293
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:14.058026+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 294
  },
  {
    "latitude": -15.1098634,
    "longitude": -75.1619393,
    "created_at": "2026-03-11T15:53:14.243804+00:00",
    "accuracy": 5.18699979782104,
    "elevation": 738.0,
    "ordinal": 295
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:14.321149+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 296
  },
  {
    "latitude": -15.114082,
    "longitude": -75.1693079,
    "created_at": "2026-03-11T15:53:15.560572+00:00",
    "accuracy": 5.01700019836426,
    "elevation": 746.0,
    "ordinal": 297
  },
  {
    "latitude": -15.0986088,
    "longitude": -75.1421348,
    "created_at": "2026-03-11T15:53:15.593364+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 845.0,
    "ordinal": 298
  },
  {
    "latitude": -15.0985956,
    "longitude": -75.1421309,
    "created_at": "2026-03-11T15:53:15.855964+00:00",
    "accuracy": 1.10500001907349,
    "elevation": 845.0,
    "ordinal": 299
  },
  {
    "latitude": -15.1179236,
    "longitude": -75.1767399,
    "created_at": "2026-03-11T15:53:15.861961+00:00",
    "accuracy": 7.22800016403198,
    "elevation": 754.0,
    "ordinal": 300
  },
  {
    "latitude": -15.0986035,
    "longitude": -75.1421307,
    "created_at": "2026-03-11T15:53:16.17798+00:00",
    "accuracy": 0.509999990463257,
    "elevation": 845.0,
    "ordinal": 301
  },
  {
    "latitude": -15.1222305,
    "longitude": -75.1837119,
    "created_at": "2026-03-11T15:53:16.188563+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 742.0,
    "ordinal": 302
  },
  {
    "latitude": -15.0986241,
    "longitude": -75.1421564,
    "created_at": "2026-03-11T15:53:16.510743+00:00",
    "accuracy": 1.87000000476837,
    "elevation": 845.0,
    "ordinal": 303
  },
  {
    "latitude": -15.1232603,
    "longitude": -75.1907091,
    "created_at": "2026-03-11T15:53:16.863357+00:00",
    "accuracy": 3.91100001335144,
    "elevation": 726.0,
    "ordinal": 304
  },
  {
    "latitude": -15.1013256,
    "longitude": -75.1469009,
    "created_at": "2026-03-11T15:53:16.895489+00:00",
    "accuracy": 5.52699995040894,
    "elevation": 798.0,
    "ordinal": 305
  },
  {
    "latitude": -15.1227286,
    "longitude": -75.1965051,
    "created_at": "2026-03-11T15:53:17.129796+00:00",
    "accuracy": 6.29199981689453,
    "elevation": 722.0,
    "ordinal": 306
  },
  {
    "latitude": -15.1056429,
    "longitude": -75.1545271,
    "created_at": "2026-03-11T15:53:17.192792+00:00",
    "accuracy": 5.78200006484985,
    "elevation": 758.0,
    "ordinal": 307
  },
  {
    "latitude": -15.1243546,
    "longitude": -75.2015334,
    "created_at": "2026-03-11T15:53:17.450529+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 706.0,
    "ordinal": 308
  },
  {
    "latitude": -15.1098634,
    "longitude": -75.1619393,
    "created_at": "2026-03-11T15:53:17.453584+00:00",
    "accuracy": 5.18699979782104,
    "elevation": 738.0,
    "ordinal": 309
  },
  {
    "latitude": -15.114082,
    "longitude": -75.1693079,
    "created_at": "2026-03-11T15:53:17.76996+00:00",
    "accuracy": 5.01700019836426,
    "elevation": 746.0,
    "ordinal": 310
  },
  {
    "latitude": -15.1268067,
    "longitude": -75.2087248,
    "created_at": "2026-03-11T15:53:18.22929+00:00",
    "accuracy": 5.27199983596802,
    "elevation": 696.0,
    "ordinal": 311
  },
  {
    "latitude": -15.1179236,
    "longitude": -75.1767399,
    "created_at": "2026-03-11T15:53:18.385723+00:00",
    "accuracy": 7.22800016403198,
    "elevation": 754.0,
    "ordinal": 312
  },
  {
    "latitude": -15.1292334,
    "longitude": -75.2165494,
    "created_at": "2026-03-11T15:53:18.482507+00:00",
    "accuracy": 3.7409999370575,
    "elevation": 694.0,
    "ordinal": 313
  },
  {
    "latitude": -15.1222305,
    "longitude": -75.1837119,
    "created_at": "2026-03-11T15:53:18.654375+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 742.0,
    "ordinal": 314
  },
  {
    "latitude": -15.1319334,
    "longitude": -75.2229644,
    "created_at": "2026-03-11T15:53:18.730086+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 698.0,
    "ordinal": 315
  },
  {
    "latitude": -15.1232603,
    "longitude": -75.1907091,
    "created_at": "2026-03-11T15:53:18.90896+00:00",
    "accuracy": 3.91100001335144,
    "elevation": 726.0,
    "ordinal": 316
  },
  {
    "latitude": -15.1322089,
    "longitude": -75.2279031,
    "created_at": "2026-03-11T15:53:18.964712+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 686.0,
    "ordinal": 317
  },
  {
    "latitude": -15.1227286,
    "longitude": -75.1965051,
    "created_at": "2026-03-11T15:53:19.172899+00:00",
    "accuracy": 6.29199981689453,
    "elevation": 722.0,
    "ordinal": 318
  },
  {
    "latitude": -15.1243546,
    "longitude": -75.2015334,
    "created_at": "2026-03-11T15:53:19.738797+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 706.0,
    "ordinal": 319
  },
  {
    "latitude": -15.1309756,
    "longitude": -75.2309796,
    "created_at": "2026-03-11T15:53:19.753133+00:00",
    "accuracy": 4.25099992752075,
    "elevation": 677.0,
    "ordinal": 320
  },
  {
    "latitude": -15.1268067,
    "longitude": -75.2087248,
    "created_at": "2026-03-11T15:53:20.012789+00:00",
    "accuracy": 5.27199983596802,
    "elevation": 696.0,
    "ordinal": 321
  },
  {
    "latitude": -15.1298326,
    "longitude": -75.2330346,
    "created_at": "2026-03-11T15:53:20.019108+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 669.0,
    "ordinal": 322
  },
  {
    "latitude": -15.1292334,
    "longitude": -75.2165494,
    "created_at": "2026-03-11T15:53:20.389399+00:00",
    "accuracy": 3.7409999370575,
    "elevation": 694.0,
    "ordinal": 323
  },
  {
    "latitude": -15.1326401,
    "longitude": -75.2341012,
    "created_at": "2026-03-11T15:53:20.402136+00:00",
    "accuracy": 4.84700012207031,
    "elevation": 643.0,
    "ordinal": 324
  },
  {
    "latitude": -15.1319334,
    "longitude": -75.2229644,
    "created_at": "2026-03-11T15:53:21.119012+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 698.0,
    "ordinal": 325
  },
  {
    "latitude": -15.1342423,
    "longitude": -75.2360355,
    "created_at": "2026-03-11T15:53:21.141585+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 632.0,
    "ordinal": 326
  },
  {
    "latitude": -15.1322089,
    "longitude": -75.2279031,
    "created_at": "2026-03-11T15:53:21.383747+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 686.0,
    "ordinal": 327
  },
  {
    "latitude": -15.1373275,
    "longitude": -75.237018,
    "created_at": "2026-03-11T15:53:21.408098+00:00",
    "accuracy": 4.59200000762939,
    "elevation": 625.0,
    "ordinal": 328
  },
  {
    "latitude": -15.1309756,
    "longitude": -75.2309796,
    "created_at": "2026-03-11T15:53:21.642238+00:00",
    "accuracy": 4.25099992752075,
    "elevation": 677.0,
    "ordinal": 329
  },
  {
    "latitude": -15.1404241,
    "longitude": -75.2384826,
    "created_at": "2026-03-11T15:53:21.692582+00:00",
    "accuracy": 5.35699987411499,
    "elevation": 600.0,
    "ordinal": 330
  },
  {
    "latitude": -15.1298326,
    "longitude": -75.2330346,
    "created_at": "2026-03-11T15:53:21.915517+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 669.0,
    "ordinal": 331
  },
  {
    "latitude": -15.1423072,
    "longitude": -75.2405395,
    "created_at": "2026-03-11T15:53:21.921475+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 591.0,
    "ordinal": 332
  },
  {
    "latitude": -15.1326401,
    "longitude": -75.2341012,
    "created_at": "2026-03-11T15:53:22.292259+00:00",
    "accuracy": 4.84700012207031,
    "elevation": 643.0,
    "ordinal": 333
  },
  {
    "latitude": -15.1453338,
    "longitude": -75.242834,
    "created_at": "2026-03-11T15:53:22.297327+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 572.0,
    "ordinal": 334
  },
  {
    "latitude": -15.1342423,
    "longitude": -75.2360355,
    "created_at": "2026-03-11T15:53:22.564148+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 632.0,
    "ordinal": 335
  },
  {
    "latitude": -15.1472598,
    "longitude": -75.2453668,
    "created_at": "2026-03-11T15:53:22.574448+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 556.0,
    "ordinal": 336
  },
  {
    "latitude": -15.1373275,
    "longitude": -75.237018,
    "created_at": "2026-03-11T15:53:22.890894+00:00",
    "accuracy": 4.59200000762939,
    "elevation": 625.0,
    "ordinal": 337
  },
  {
    "latitude": -15.1462476,
    "longitude": -75.2480753,
    "created_at": "2026-03-11T15:53:22.900463+00:00",
    "accuracy": 4.33599996566772,
    "elevation": 533.0,
    "ordinal": 338
  },
  {
    "latitude": -15.1404241,
    "longitude": -75.2384826,
    "created_at": "2026-03-11T15:53:23.193737+00:00",
    "accuracy": 5.35699987411499,
    "elevation": 600.0,
    "ordinal": 339
  },
  {
    "latitude": -15.1455557,
    "longitude": -75.2517958,
    "created_at": "2026-03-11T15:53:23.207571+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 512.0,
    "ordinal": 340
  },
  {
    "latitude": -15.1423072,
    "longitude": -75.2405395,
    "created_at": "2026-03-11T15:53:23.527179+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 591.0,
    "ordinal": 341
  },
  {
    "latitude": -15.1448023,
    "longitude": -75.2555256,
    "created_at": "2026-03-11T15:53:23.606526+00:00",
    "accuracy": 4.42199993133545,
    "elevation": 487.0,
    "ordinal": 342
  },
  {
    "latitude": -15.1453338,
    "longitude": -75.242834,
    "created_at": "2026-03-11T15:53:23.757516+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 572.0,
    "ordinal": 343
  },
  {
    "latitude": -15.1449249,
    "longitude": -75.2592501,
    "created_at": "2026-03-11T15:53:23.854022+00:00",
    "accuracy": 4.4210000038147,
    "elevation": 474.0,
    "ordinal": 344
  },
  {
    "latitude": -15.1472598,
    "longitude": -75.2453668,
    "created_at": "2026-03-11T15:53:24.006855+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 556.0,
    "ordinal": 345
  },
  {
    "latitude": -15.1449363,
    "longitude": -75.2626752,
    "created_at": "2026-03-11T15:53:24.094605+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 473.0,
    "ordinal": 346
  },
  {
    "latitude": -15.1462476,
    "longitude": -75.2480753,
    "created_at": "2026-03-11T15:53:24.260986+00:00",
    "accuracy": 4.33599996566772,
    "elevation": 533.0,
    "ordinal": 347
  },
  {
    "latitude": -15.1442786,
    "longitude": -75.2654669,
    "created_at": "2026-03-11T15:53:24.365884+00:00",
    "accuracy": 4.2519998550415,
    "elevation": 462.0,
    "ordinal": 348
  },
  {
    "latitude": -15.1455557,
    "longitude": -75.2517958,
    "created_at": "2026-03-11T15:53:24.514743+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 512.0,
    "ordinal": 349
  },
  {
    "latitude": -15.1434066,
    "longitude": -75.2682308,
    "created_at": "2026-03-11T15:53:24.611615+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 459.0,
    "ordinal": 350
  },
  {
    "latitude": -15.1448023,
    "longitude": -75.2555256,
    "created_at": "2026-03-11T15:53:24.881609+00:00",
    "accuracy": 4.42199993133545,
    "elevation": 487.0,
    "ordinal": 351
  },
  {
    "latitude": -15.1424523,
    "longitude": -75.2705703,
    "created_at": "2026-03-11T15:53:24.893507+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 459.0,
    "ordinal": 352
  },
  {
    "latitude": -15.1449249,
    "longitude": -75.2592501,
    "created_at": "2026-03-11T15:53:25.134639+00:00",
    "accuracy": 4.4210000038147,
    "elevation": 474.0,
    "ordinal": 353
  },
  {
    "latitude": -15.1415926,
    "longitude": -75.2730768,
    "created_at": "2026-03-11T15:53:25.157324+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 454.0,
    "ordinal": 354
  },
  {
    "latitude": -15.1449363,
    "longitude": -75.2626752,
    "created_at": "2026-03-11T15:53:25.390733+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 473.0,
    "ordinal": 355
  },
  {
    "latitude": -15.1415118,
    "longitude": -75.2758337,
    "created_at": "2026-03-11T15:53:25.428888+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 445.0,
    "ordinal": 356
  },
  {
    "latitude": -15.1442786,
    "longitude": -75.2654669,
    "created_at": "2026-03-11T15:53:25.667888+00:00",
    "accuracy": 4.2519998550415,
    "elevation": 462.0,
    "ordinal": 357
  },
  {
    "latitude": -15.1410318,
    "longitude": -75.2801282,
    "created_at": "2026-03-11T15:53:25.673281+00:00",
    "accuracy": 4.50699996948242,
    "elevation": 441.0,
    "ordinal": 358
  },
  {
    "latitude": -15.1434066,
    "longitude": -75.2682308,
    "created_at": "2026-03-11T15:53:25.928627+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 459.0,
    "ordinal": 359
  },
  {
    "latitude": -15.1424523,
    "longitude": -75.2705703,
    "created_at": "2026-03-11T15:53:26.178524+00:00",
    "accuracy": 4.50600004196167,
    "elevation": 459.0,
    "ordinal": 360
  },
  {
    "latitude": -15.1415926,
    "longitude": -75.2730768,
    "created_at": "2026-03-11T15:53:26.716404+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 454.0,
    "ordinal": 361
  },
  {
    "latitude": -15.1415118,
    "longitude": -75.2758337,
    "created_at": "2026-03-11T15:53:26.969263+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 445.0,
    "ordinal": 362
  },
  {
    "latitude": -15.1410318,
    "longitude": -75.2801282,
    "created_at": "2026-03-11T15:53:27.203425+00:00",
    "accuracy": 4.50699996948242,
    "elevation": 441.0,
    "ordinal": 363
  },
  {
    "latitude": -15.1429433,
    "longitude": -75.2867557,
    "created_at": "2026-03-11T15:53:51.453889+00:00",
    "accuracy": 2.72099995613098,
    "elevation": 414.0,
    "ordinal": 364
  },
  {
    "latitude": -15.1429406,
    "longitude": -75.2867637,
    "created_at": "2026-03-11T15:54:56.435218+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 414.0,
    "ordinal": 365
  },
  {
    "latitude": -15.1428933,
    "longitude": -75.2867719,
    "created_at": "2026-03-11T15:55:51.492526+00:00",
    "accuracy": 3.36999988555908,
    "elevation": 414.0,
    "ordinal": 366
  },
  {
    "latitude": -15.1428922,
    "longitude": -75.2867745,
    "created_at": "2026-03-11T15:56:51.469625+00:00",
    "accuracy": 3.14599990844727,
    "elevation": 414.0,
    "ordinal": 367
  },
  {
    "latitude": -15.142871,
    "longitude": -75.2867645,
    "created_at": "2026-03-11T15:57:51.489721+00:00",
    "accuracy": 3,
    "elevation": 414.0,
    "ordinal": 368
  },
  {
    "latitude": -15.1428887,
    "longitude": -75.2867688,
    "created_at": "2026-03-11T15:58:51.530929+00:00",
    "accuracy": 4.45900011062622,
    "elevation": 414.0,
    "ordinal": 369
  },
  {
    "latitude": -15.1428664,
    "longitude": -75.2867461,
    "created_at": "2026-03-11T15:59:51.475672+00:00",
    "accuracy": 3,
    "elevation": 414.0,
    "ordinal": 370
  },
  {
    "latitude": -15.090414,
    "longitude": -75.1321787,
    "created_at": "2026-03-11T16:04:12.347096+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 879.0,
    "ordinal": 371
  },
  {
    "latitude": -15.0938695,
    "longitude": -75.1340424,
    "created_at": "2026-03-11T16:04:12.749459+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866.0,
    "ordinal": 372
  },
  {
    "latitude": -15.0940612,
    "longitude": -75.1340457,
    "created_at": "2026-03-11T16:04:13.065235+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866.0,
    "ordinal": 373
  },
  {
    "latitude": -15.0940575,
    "longitude": -75.1340407,
    "created_at": "2026-03-11T16:04:13.612867+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866.0,
    "ordinal": 374
  },
  {
    "latitude": -15.0940597,
    "longitude": -75.1340333,
    "created_at": "2026-03-11T16:04:13.940069+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866.0,
    "ordinal": 375
  },
  {
    "latitude": -15.0952093,
    "longitude": -75.1360862,
    "created_at": "2026-03-11T16:04:14.286493+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 880.0,
    "ordinal": 376
  },
  {
    "latitude": -15.0979442,
    "longitude": -75.1409139,
    "created_at": "2026-03-11T16:04:14.629007+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 858.0,
    "ordinal": 377
  },
  {
    "latitude": -15.0985984,
    "longitude": -75.1421229,
    "created_at": "2026-03-11T16:04:14.96642+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 378
  },
  {
    "latitude": -15.0985976,
    "longitude": -75.1421254,
    "created_at": "2026-03-11T16:04:15.30641+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 379
  },
  {
    "latitude": -15.0985976,
    "longitude": -75.1421237,
    "created_at": "2026-03-11T16:04:15.643889+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 380
  },
  {
    "latitude": -15.098599,
    "longitude": -75.1421212,
    "created_at": "2026-03-11T16:04:16.104038+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 381
  },
  {
    "latitude": -15.0985988,
    "longitude": -75.1421222,
    "created_at": "2026-03-11T16:04:16.464832+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 382
  },
  {
    "latitude": -15.0986009,
    "longitude": -75.1421228,
    "created_at": "2026-03-11T16:04:16.804036+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 383
  },
  {
    "latitude": -15.0986016,
    "longitude": -75.1421227,
    "created_at": "2026-03-11T16:04:17.130154+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 384
  },
  {
    "latitude": -15.0986016,
    "longitude": -75.1421227,
    "created_at": "2026-03-11T16:04:17.466791+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 385
  },
  {
    "latitude": -15.0986016,
    "longitude": -75.1421227,
    "created_at": "2026-03-11T16:04:17.794457+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 386
  },
  {
    "latitude": -15.0986016,
    "longitude": -75.1421227,
    "created_at": "2026-03-11T16:04:18.108446+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 387
  },
  {
    "latitude": -15.0986016,
    "longitude": -75.1421227,
    "created_at": "2026-03-11T16:04:18.431629+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 388
  },
  {
    "latitude": -15.0986016,
    "longitude": -75.1421227,
    "created_at": "2026-03-11T16:04:18.877482+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 389
  },
  {
    "latitude": -15.0986016,
    "longitude": -75.1421227,
    "created_at": "2026-03-11T16:04:19.202121+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 390
  },
  {
    "latitude": -15.0986016,
    "longitude": -75.1421227,
    "created_at": "2026-03-11T16:04:19.603616+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 391
  },
  {
    "latitude": -15.0986016,
    "longitude": -75.1421227,
    "created_at": "2026-03-11T16:04:19.959395+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 392
  },
  {
    "latitude": -15.0986107,
    "longitude": -75.1421134,
    "created_at": "2026-03-11T16:04:20.317977+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 393
  },
  {
    "latitude": -15.0986192,
    "longitude": -75.1421151,
    "created_at": "2026-03-11T16:04:20.645872+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 394
  },
  {
    "latitude": -15.0986201,
    "longitude": -75.1421107,
    "created_at": "2026-03-11T16:04:20.988363+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 395
  },
  {
    "latitude": -15.0986258,
    "longitude": -75.1421058,
    "created_at": "2026-03-11T16:04:21.329752+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 396
  },
  {
    "latitude": -15.0986265,
    "longitude": -75.1421052,
    "created_at": "2026-03-11T16:04:35.885006+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 397
  },
  {
    "latitude": -15.0986265,
    "longitude": -75.1421052,
    "created_at": "2026-03-11T16:04:56.610638+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 398
  },
  {
    "latitude": -15.0986265,
    "longitude": -75.1421052,
    "created_at": "2026-03-11T16:04:56.924459+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 399
  },
  {
    "latitude": -15.1510757,
    "longitude": -75.2888538,
    "created_at": "2026-03-11T16:04:57.040713+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 266.0,
    "ordinal": 400
  },
  {
    "latitude": -15.0986265,
    "longitude": -75.1421052,
    "created_at": "2026-03-11T16:04:57.241282+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 401
  },
  {
    "latitude": -15.090414,
    "longitude": -75.1321787,
    "created_at": "2026-03-11T16:04:57.344438+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 879.0,
    "ordinal": 402
  },
  {
    "latitude": -15.0986265,
    "longitude": -75.1421052,
    "created_at": "2026-03-11T16:04:57.567225+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 403
  },
  {
    "latitude": -15.0938695,
    "longitude": -75.1340424,
    "created_at": "2026-03-11T16:04:57.654714+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866.0,
    "ordinal": 404
  },
  {
    "latitude": -15.0986267,
    "longitude": -75.142138,
    "created_at": "2026-03-11T16:04:57.861719+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 405
  },
  {
    "latitude": -15.0940612,
    "longitude": -75.1340457,
    "created_at": "2026-03-11T16:04:57.97876+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866.0,
    "ordinal": 406
  },
  {
    "latitude": -15.0986243,
    "longitude": -75.1421373,
    "created_at": "2026-03-11T16:04:58.17888+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 407
  },
  {
    "latitude": -15.0940575,
    "longitude": -75.1340407,
    "created_at": "2026-03-11T16:04:58.296849+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866.0,
    "ordinal": 408
  },
  {
    "latitude": -15.0986658,
    "longitude": -75.1422031,
    "created_at": "2026-03-11T16:04:58.484208+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 845.0,
    "ordinal": 409
  },
  {
    "latitude": -15.0940597,
    "longitude": -75.1340333,
    "created_at": "2026-03-11T16:04:58.60067+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 866.0,
    "ordinal": 410
  },
  {
    "latitude": -15.1014959,
    "longitude": -75.1471799,
    "created_at": "2026-03-11T16:05:10.826492+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 798.0,
    "ordinal": 411
  },
  {
    "latitude": -15.1057904,
    "longitude": -75.1547987,
    "created_at": "2026-03-11T16:05:18.823931+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 758.0,
    "ordinal": 412
  },
  {
    "latitude": -15.0952093,
    "longitude": -75.1360862,
    "created_at": "2026-03-11T16:05:47.223932+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 880.0,
    "ordinal": 413
  },
  {
    "latitude": -15.1100058,
    "longitude": -75.1621891,
    "created_at": "2026-03-11T16:05:50.394371+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 734.0,
    "ordinal": 414
  },
  {
    "latitude": -15.1437053,
    "longitude": -75.286275,
    "created_at": "2026-03-11T16:06:13.383247+00:00",
    "accuracy": 7.48299980163574,
    "elevation": 410.0,
    "ordinal": 415
  },
  {
    "latitude": -15.150932,
    "longitude": -75.2888829,
    "created_at": "2026-03-11T16:06:13.386667+00:00",
    "accuracy": 4.4210000038147,
    "elevation": 266.0,
    "ordinal": 416
  },
  {
    "latitude": -15.1464817,
    "longitude": -75.2858728,
    "created_at": "2026-03-11T16:06:13.644621+00:00",
    "accuracy": 4.33699989318848,
    "elevation": 361.0,
    "ordinal": 417
  },
  {
    "latitude": -15.1437053,
    "longitude": -75.286275,
    "created_at": "2026-03-11T16:06:13.649364+00:00",
    "accuracy": 7.48299980163574,
    "elevation": 410.0,
    "ordinal": 418
  },
  {
    "latitude": -15.1539713,
    "longitude": -75.2884993,
    "created_at": "2026-03-11T16:06:13.712741+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 232.0,
    "ordinal": 419
  },
  {
    "latitude": -15.1574647,
    "longitude": -75.2879565,
    "created_at": "2026-03-11T16:08:07.065122+00:00",
    "accuracy": 4.72900009155273,
    "elevation": 172.0,
    "ordinal": 420
  },
  {
    "latitude": -15.1464817,
    "longitude": -75.2858728,
    "created_at": "2026-03-11T16:08:07.099306+00:00",
    "accuracy": 4.33699989318848,
    "elevation": 361.0,
    "ordinal": 421
  },
  {
    "latitude": -15.1462595,
    "longitude": -75.2884802,
    "created_at": "2026-03-11T16:08:07.106332+00:00",
    "accuracy": 3.82599997520447,
    "elevation": 324.0,
    "ordinal": 422
  },
  {
    "latitude": -15.1437053,
    "longitude": -75.286275,
    "created_at": "2026-03-11T16:08:07.367675+00:00",
    "accuracy": 7.48299980163574,
    "elevation": 410.0,
    "ordinal": 423
  },
  {
    "latitude": -15.1552964,
    "longitude": -75.2892321,
    "created_at": "2026-03-11T16:08:07.36785+00:00",
    "accuracy": 5.18699979782104,
    "elevation": 196.0,
    "ordinal": 424
  },
  {
    "latitude": -15.147592,
    "longitude": -75.2904869,
    "created_at": "2026-03-11T16:08:07.482406+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 303.0,
    "ordinal": 425
  },
  {
    "latitude": -15.1437053,
    "longitude": -75.286275,
    "created_at": "2026-03-11T16:08:07.484445+00:00",
    "accuracy": 7.48299980163574,
    "elevation": 410.0,
    "ordinal": 426
  },
  {
    "latitude": -15.1462595,
    "longitude": -75.2884802,
    "created_at": "2026-03-11T16:08:07.498333+00:00",
    "accuracy": 3.82599997520447,
    "elevation": 324.0,
    "ordinal": 427
  },
  {
    "latitude": -15.1464817,
    "longitude": -75.2858728,
    "created_at": "2026-03-11T16:12:54.545164+00:00",
    "accuracy": 4.33699989318848,
    "elevation": 361.0,
    "ordinal": 428
  },
  {
    "latitude": -15.147592,
    "longitude": -75.2904869,
    "created_at": "2026-03-11T16:12:54.545536+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 303.0,
    "ordinal": 429
  },
  {
    "latitude": -15.1464817,
    "longitude": -75.2858728,
    "created_at": "2026-03-11T16:12:54.546083+00:00",
    "accuracy": 4.33699989318848,
    "elevation": 361.0,
    "ordinal": 430
  },
  {
    "latitude": -15.1593238,
    "longitude": -75.2862865,
    "created_at": "2026-03-11T16:12:54.546754+00:00",
    "accuracy": 4.76200008392334,
    "elevation": 137.0,
    "ordinal": 431
  },
  {
    "latitude": -15.1597915,
    "longitude": -75.2861166,
    "created_at": "2026-03-11T16:12:54.549108+00:00",
    "accuracy": 3.65599989891052,
    "elevation": 137.0,
    "ordinal": 432
  },
  {
    "latitude": -15.1437053,
    "longitude": -75.286275,
    "created_at": "2026-03-11T16:12:54.707285+00:00",
    "accuracy": 7.48299980163574,
    "elevation": 410.0,
    "ordinal": 433
  },
  {
    "latitude": -15.1598993,
    "longitude": -75.2860559,
    "created_at": "2026-03-11T16:12:54.722836+00:00",
    "accuracy": 3.12599992752075,
    "elevation": 137.0,
    "ordinal": 434
  },
  {
    "latitude": -15.1462595,
    "longitude": -75.2884802,
    "created_at": "2026-03-11T16:12:54.916665+00:00",
    "accuracy": 3.82599997520447,
    "elevation": 324.0,
    "ordinal": 435
  },
  {
    "latitude": -15.1462595,
    "longitude": -75.2884802,
    "created_at": "2026-03-11T16:12:54.944435+00:00",
    "accuracy": 3.82599997520447,
    "elevation": 324.0,
    "ordinal": 436
  },
  {
    "latitude": -15.1464817,
    "longitude": -75.2858728,
    "created_at": "2026-03-11T16:12:55.007991+00:00",
    "accuracy": 4.33699989318848,
    "elevation": 361.0,
    "ordinal": 437
  },
  {
    "latitude": -15.147592,
    "longitude": -75.2904869,
    "created_at": "2026-03-11T16:12:55.182266+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 303.0,
    "ordinal": 438
  },
  {
    "latitude": -15.147592,
    "longitude": -75.2904869,
    "created_at": "2026-03-11T16:12:55.218959+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 303.0,
    "ordinal": 439
  },
  {
    "latitude": -15.1599275,
    "longitude": -75.2859953,
    "created_at": "2026-03-11T16:12:55.259938+00:00",
    "accuracy": 3.19000005722046,
    "elevation": 137.0,
    "ordinal": 440
  },
  {
    "latitude": -15.1462595,
    "longitude": -75.2884802,
    "created_at": "2026-03-11T16:12:55.268436+00:00",
    "accuracy": 3.82599997520447,
    "elevation": 324.0,
    "ordinal": 441
  },
  {
    "latitude": -15.147592,
    "longitude": -75.2904869,
    "created_at": "2026-03-11T16:12:55.537479+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 303.0,
    "ordinal": 442
  },
  {
    "latitude": -15.1599205,
    "longitude": -75.2859943,
    "created_at": "2026-03-11T16:13:51.681578+00:00",
    "accuracy": 3.23099994659424,
    "elevation": 137.0,
    "ordinal": 443
  },
  {
    "latitude": -15.1599602,
    "longitude": -75.2860087,
    "created_at": "2026-03-11T16:14:53.101646+00:00",
    "accuracy": 4.58900022506714,
    "elevation": 137.0,
    "ordinal": 444
  },
  {
    "latitude": -15.1599968,
    "longitude": -75.2860203,
    "created_at": "2026-03-11T16:16:13.935488+00:00",
    "accuracy": 2.72099995613098,
    "elevation": 137.0,
    "ordinal": 445
  },
  {
    "latitude": -15.1597665,
    "longitude": -75.2861119,
    "created_at": "2026-03-11T16:17:07.307165+00:00",
    "accuracy": 3.02300000190735,
    "elevation": 137.0,
    "ordinal": 446
  },
  {
    "latitude": -15.1405967,
    "longitude": -75.282136,
    "created_at": "2026-03-11T16:26:26.694032+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 441.0,
    "ordinal": 447
  },
  {
    "latitude": -15.1683059,
    "longitude": -75.2704325,
    "created_at": "2026-03-11T16:27:03.769959+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 156.0,
    "ordinal": 448
  },
  {
    "latitude": -15.1715403,
    "longitude": -75.2666315,
    "created_at": "2026-03-11T16:29:31.31406+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 178.0,
    "ordinal": 449
  },
  {
    "latitude": -15.1686319,
    "longitude": -75.2700351,
    "created_at": "2026-03-11T16:29:31.792607+00:00",
    "accuracy": 67.068000793457,
    "elevation": 140.0,
    "ordinal": 450
  },
  {
    "latitude": -15.1715545,
    "longitude": -75.2666247,
    "created_at": "2026-03-11T16:33:03.962677+00:00",
    "accuracy": 3.81200003623962,
    "elevation": 178.0,
    "ordinal": 451
  },
  {
    "latitude": -15.1715365,
    "longitude": -75.2666313,
    "created_at": "2026-03-11T16:33:15.932363+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 178.0,
    "ordinal": 452
  },
  {
    "latitude": -15.1715352,
    "longitude": -75.2666577,
    "created_at": "2026-03-11T16:33:16.488592+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 178.0,
    "ordinal": 453
  },
  {
    "latitude": -15.1596911,
    "longitude": -75.286053,
    "created_at": "2026-03-11T16:33:39.644237+00:00",
    "accuracy": 11.0900001525879,
    "elevation": 137.0,
    "ordinal": 454
  },
  {
    "latitude": -15.1596857,
    "longitude": -75.2860441,
    "created_at": "2026-03-11T16:33:39.958856+00:00",
    "accuracy": 4.25099992752075,
    "elevation": 137.0,
    "ordinal": 455
  },
  {
    "latitude": -15.1715546,
    "longitude": -75.2666341,
    "created_at": "2026-03-11T16:34:11.500808+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 178.0,
    "ordinal": 456
  },
  {
    "latitude": -15.1598675,
    "longitude": -75.2864482,
    "created_at": "2026-03-11T16:34:40.252203+00:00",
    "accuracy": 4.7350001335144,
    "elevation": 137.0,
    "ordinal": 457
  },
  {
    "latitude": -15.1715681,
    "longitude": -75.2666117,
    "created_at": "2026-03-11T16:34:40.546235+00:00",
    "accuracy": 3,
    "elevation": 178.0,
    "ordinal": 458
  },
  {
    "latitude": -15.1715472,
    "longitude": -75.2666244,
    "created_at": "2026-03-11T16:35:11.752841+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 178.0,
    "ordinal": 459
  },
  {
    "latitude": -15.1717725,
    "longitude": -75.2659838,
    "created_at": "2026-03-11T16:39:15.605614+00:00",
    "accuracy": 18.1909999847412,
    "elevation": 155.0,
    "ordinal": 460
  },
  {
    "latitude": -15.1734135,
    "longitude": -75.2627436,
    "created_at": "2026-03-11T16:42:58.755653+00:00",
    "accuracy": 4.84700012207031,
    "elevation": 153.0,
    "ordinal": 461
  },
  {
    "latitude": -15.1767641,
    "longitude": -75.2602522,
    "created_at": "2026-03-11T16:42:58.761175+00:00",
    "accuracy": 4.84700012207031,
    "elevation": 145.0,
    "ordinal": 462
  },
  {
    "latitude": -15.1754724,
    "longitude": -75.261635,
    "created_at": "2026-03-11T16:42:59.058516+00:00",
    "accuracy": 4.32200002670288,
    "elevation": 159.0,
    "ordinal": 463
  },
  {
    "latitude": -15.1596911,
    "longitude": -75.286053,
    "created_at": "2026-03-11T16:43:08.036069+00:00",
    "accuracy": 11.0900001525879,
    "elevation": 137.0,
    "ordinal": 464
  },
  {
    "latitude": -15.1596911,
    "longitude": -75.286053,
    "created_at": "2026-03-11T16:43:08.124404+00:00",
    "accuracy": 11.0900001525879,
    "elevation": 137.0,
    "ordinal": 465
  },
  {
    "latitude": -15.1596911,
    "longitude": -75.286053,
    "created_at": "2026-03-11T16:43:08.127152+00:00",
    "accuracy": 11.0900001525879,
    "elevation": 137.0,
    "ordinal": 466
  },
  {
    "latitude": -15.1596857,
    "longitude": -75.2860441,
    "created_at": "2026-03-11T16:43:08.337329+00:00",
    "accuracy": 4.25099992752075,
    "elevation": 137.0,
    "ordinal": 467
  },
  {
    "latitude": -15.1596857,
    "longitude": -75.2860441,
    "created_at": "2026-03-11T16:43:08.695348+00:00",
    "accuracy": 4.25099992752075,
    "elevation": 137.0,
    "ordinal": 468
  },
  {
    "latitude": -15.1596857,
    "longitude": -75.2860441,
    "created_at": "2026-03-11T16:43:08.708195+00:00",
    "accuracy": 4.25099992752075,
    "elevation": 137.0,
    "ordinal": 469
  },
  {
    "latitude": -15.1598675,
    "longitude": -75.2864482,
    "created_at": "2026-03-11T16:45:47.678516+00:00",
    "accuracy": 4.7350001335144,
    "elevation": 137.0,
    "ordinal": 470
  },
  {
    "latitude": -15.1805072,
    "longitude": -75.2537934,
    "created_at": "2026-03-11T16:45:56.730035+00:00",
    "accuracy": 7.82299995422363,
    "elevation": 165.0,
    "ordinal": 471
  },
  {
    "latitude": -15.1608634,
    "longitude": -75.2844246,
    "created_at": "2026-03-11T16:45:56.78627+00:00",
    "accuracy": 4.4210000038147,
    "elevation": 125.0,
    "ordinal": 472
  },
  {
    "latitude": -15.1598675,
    "longitude": -75.2864482,
    "created_at": "2026-03-11T16:45:57.276357+00:00",
    "accuracy": 4.7350001335144,
    "elevation": 137.0,
    "ordinal": 473
  },
  {
    "latitude": -15.1617146,
    "longitude": -75.2823913,
    "created_at": "2026-03-11T16:45:57.301854+00:00",
    "accuracy": 4.59200000762939,
    "elevation": 135.0,
    "ordinal": 474
  },
  {
    "latitude": -15.1624457,
    "longitude": -75.2804784,
    "created_at": "2026-03-11T16:45:57.59156+00:00",
    "accuracy": 5.35699987411499,
    "elevation": 156.0,
    "ordinal": 475
  },
  {
    "latitude": -15.1608634,
    "longitude": -75.2844246,
    "created_at": "2026-03-11T16:45:57.598951+00:00",
    "accuracy": 4.4210000038147,
    "elevation": 125.0,
    "ordinal": 476
  },
  {
    "latitude": -15.1717725,
    "longitude": -75.2659838,
    "created_at": "2026-03-11T16:45:59.330842+00:00",
    "accuracy": 81.0149993896484,
    "elevation": 155.0,
    "ordinal": 477
  },
  {
    "latitude": -15.1717725,
    "longitude": -75.2659838,
    "created_at": "2026-03-11T16:46:00.322684+00:00",
    "accuracy": 81.0149993896484,
    "elevation": 155.0,
    "ordinal": 478
  },
  {
    "latitude": -15.1635528,
    "longitude": -75.2780452,
    "created_at": "2026-03-11T16:46:06.979668+00:00",
    "accuracy": 4.67700004577637,
    "elevation": 149.0,
    "ordinal": 479
  },
  {
    "latitude": -15.1617146,
    "longitude": -75.2823913,
    "created_at": "2026-03-11T16:46:06.996443+00:00",
    "accuracy": 4.59200000762939,
    "elevation": 135.0,
    "ordinal": 480
  },
  {
    "latitude": -15.1649381,
    "longitude": -75.2756617,
    "created_at": "2026-03-11T16:46:07.242059+00:00",
    "accuracy": 4.67600011825562,
    "elevation": 167.0,
    "ordinal": 481
  },
  {
    "latitude": -15.1624457,
    "longitude": -75.2804784,
    "created_at": "2026-03-11T16:46:07.265055+00:00",
    "accuracy": 5.35699987411499,
    "elevation": 156.0,
    "ordinal": 482
  },
  {
    "latitude": -15.1671858,
    "longitude": -75.2724426,
    "created_at": "2026-03-11T16:46:07.526033+00:00",
    "accuracy": 5.17500019073486,
    "elevation": 160.0,
    "ordinal": 483
  },
  {
    "latitude": -15.1635528,
    "longitude": -75.2780452,
    "created_at": "2026-03-11T16:46:07.717953+00:00",
    "accuracy": 4.67700004577637,
    "elevation": 149.0,
    "ordinal": 484
  },
  {
    "latitude": -15.1679577,
    "longitude": -75.2710989,
    "created_at": "2026-03-11T16:46:07.822718+00:00",
    "accuracy": 4.4210000038147,
    "elevation": 151.0,
    "ordinal": 485
  },
  {
    "latitude": -15.1649381,
    "longitude": -75.2756617,
    "created_at": "2026-03-11T16:46:08.048834+00:00",
    "accuracy": 4.67600011825562,
    "elevation": 167.0,
    "ordinal": 486
  },
  {
    "latitude": -15.1705593,
    "longitude": -75.26838,
    "created_at": "2026-03-11T16:46:08.118126+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 140.0,
    "ordinal": 487
  },
  {
    "latitude": -15.1671858,
    "longitude": -75.2724426,
    "created_at": "2026-03-11T16:46:08.381616+00:00",
    "accuracy": 5.17500019073486,
    "elevation": 160.0,
    "ordinal": 488
  },
  {
    "latitude": -15.1715221,
    "longitude": -75.2666245,
    "created_at": "2026-03-11T16:46:08.424253+00:00",
    "accuracy": 5.27199983596802,
    "elevation": 178.0,
    "ordinal": 489
  },
  {
    "latitude": -15.1714975,
    "longitude": -75.2666719,
    "created_at": "2026-03-11T16:46:08.697717+00:00",
    "accuracy": 3.21099996566772,
    "elevation": 164.0,
    "ordinal": 490
  },
  {
    "latitude": -15.1679577,
    "longitude": -75.2710989,
    "created_at": "2026-03-11T16:46:08.702338+00:00",
    "accuracy": 4.4210000038147,
    "elevation": 151.0,
    "ordinal": 491
  },
  {
    "latitude": -15.1715389,
    "longitude": -75.2666297,
    "created_at": "2026-03-11T16:46:09.062502+00:00",
    "accuracy": 2.63599991798401,
    "elevation": 178.0,
    "ordinal": 492
  },
  {
    "latitude": -15.1705593,
    "longitude": -75.26838,
    "created_at": "2026-03-11T16:46:09.073212+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 140.0,
    "ordinal": 493
  },
  {
    "latitude": -15.1715469,
    "longitude": -75.2666356,
    "created_at": "2026-03-11T16:46:09.397254+00:00",
    "accuracy": 2.63599991798401,
    "elevation": 178.0,
    "ordinal": 494
  },
  {
    "latitude": -15.1715221,
    "longitude": -75.2666245,
    "created_at": "2026-03-11T16:46:09.408262+00:00",
    "accuracy": 5.27199983596802,
    "elevation": 178.0,
    "ordinal": 495
  },
  {
    "latitude": -15.17165,
    "longitude": -75.2663622,
    "created_at": "2026-03-11T16:46:09.715901+00:00",
    "accuracy": 3.01300001144409,
    "elevation": 178.0,
    "ordinal": 496
  },
  {
    "latitude": -15.1714975,
    "longitude": -75.2666719,
    "created_at": "2026-03-11T16:46:09.749739+00:00",
    "accuracy": 3.21099996566772,
    "elevation": 164.0,
    "ordinal": 497
  },
  {
    "latitude": -15.1716983,
    "longitude": -75.266238,
    "created_at": "2026-03-11T16:46:09.98175+00:00",
    "accuracy": 3.15100002288818,
    "elevation": 155.0,
    "ordinal": 498
  },
  {
    "latitude": -15.1715389,
    "longitude": -75.2666297,
    "created_at": "2026-03-11T16:46:10.023458+00:00",
    "accuracy": 2.63599991798401,
    "elevation": 178.0,
    "ordinal": 499
  },
  {
    "latitude": -15.1715168,
    "longitude": -75.2666383,
    "created_at": "2026-03-11T16:46:10.274711+00:00",
    "accuracy": 3,
    "elevation": 178.0,
    "ordinal": 500
  },
  {
    "latitude": -15.1715469,
    "longitude": -75.2666356,
    "created_at": "2026-03-11T16:46:10.275342+00:00",
    "accuracy": 2.63599991798401,
    "elevation": 178.0,
    "ordinal": 501
  },
  {
    "latitude": -15.1598675,
    "longitude": -75.2864482,
    "created_at": "2026-03-11T16:46:12.126337+00:00",
    "accuracy": 4.7350001335144,
    "elevation": 137.0,
    "ordinal": 502
  },
  {
    "latitude": -15.1608634,
    "longitude": -75.2844246,
    "created_at": "2026-03-11T16:46:12.40162+00:00",
    "accuracy": 4.4210000038147,
    "elevation": 125.0,
    "ordinal": 503
  },
  {
    "latitude": -15.1617146,
    "longitude": -75.2823913,
    "created_at": "2026-03-11T16:46:12.675031+00:00",
    "accuracy": 4.59200000762939,
    "elevation": 135.0,
    "ordinal": 504
  },
  {
    "latitude": -15.17165,
    "longitude": -75.2663622,
    "created_at": "2026-03-11T16:46:12.769437+00:00",
    "accuracy": 3.01300001144409,
    "elevation": 178.0,
    "ordinal": 505
  },
  {
    "latitude": -15.1717524,
    "longitude": -75.2660637,
    "created_at": "2026-03-11T16:46:12.784029+00:00",
    "accuracy": 4.00600004196167,
    "elevation": 155.0,
    "ordinal": 506
  },
  {
    "latitude": -15.1624457,
    "longitude": -75.2804784,
    "created_at": "2026-03-11T16:46:12.95454+00:00",
    "accuracy": 5.35699987411499,
    "elevation": 156.0,
    "ordinal": 507
  },
  {
    "latitude": -15.1722788,
    "longitude": -75.264884,
    "created_at": "2026-03-11T16:46:13.038749+00:00",
    "accuracy": 4.3270001411438,
    "elevation": 177.0,
    "ordinal": 508
  },
  {
    "latitude": -15.1716983,
    "longitude": -75.266238,
    "created_at": "2026-03-11T16:46:13.049889+00:00",
    "accuracy": 3.15100002288818,
    "elevation": 155.0,
    "ordinal": 509
  },
  {
    "latitude": -15.1635528,
    "longitude": -75.2780452,
    "created_at": "2026-03-11T16:46:13.273047+00:00",
    "accuracy": 4.67700004577637,
    "elevation": 149.0,
    "ordinal": 510
  },
  {
    "latitude": -15.1765707,
    "longitude": -75.2586482,
    "created_at": "2026-03-11T16:46:13.317281+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 164.0,
    "ordinal": 511
  },
  {
    "latitude": -15.1715168,
    "longitude": -75.2666383,
    "created_at": "2026-03-11T16:46:13.339469+00:00",
    "accuracy": 3,
    "elevation": 178.0,
    "ordinal": 512
  },
  {
    "latitude": -15.1649381,
    "longitude": -75.2756617,
    "created_at": "2026-03-11T16:46:13.576778+00:00",
    "accuracy": 4.67600011825562,
    "elevation": 167.0,
    "ordinal": 513
  },
  {
    "latitude": -15.1717524,
    "longitude": -75.2660637,
    "created_at": "2026-03-11T16:46:13.608576+00:00",
    "accuracy": 4.00600004196167,
    "elevation": 155.0,
    "ordinal": 514
  },
  {
    "latitude": -15.1780443,
    "longitude": -75.2563996,
    "created_at": "2026-03-11T16:46:13.617273+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 161.0,
    "ordinal": 515
  },
  {
    "latitude": -15.1722788,
    "longitude": -75.264884,
    "created_at": "2026-03-11T16:46:13.974883+00:00",
    "accuracy": 4.3270001411438,
    "elevation": 177.0,
    "ordinal": 516
  },
  {
    "latitude": -15.1671858,
    "longitude": -75.2724426,
    "created_at": "2026-03-11T16:46:14.058372+00:00",
    "accuracy": 5.17500019073486,
    "elevation": 160.0,
    "ordinal": 517
  },
  {
    "latitude": -15.1765707,
    "longitude": -75.2586482,
    "created_at": "2026-03-11T16:46:14.277584+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 164.0,
    "ordinal": 518
  },
  {
    "latitude": -15.1679577,
    "longitude": -75.2710989,
    "created_at": "2026-03-11T16:46:14.359131+00:00",
    "accuracy": 4.4210000038147,
    "elevation": 151.0,
    "ordinal": 519
  },
  {
    "latitude": -15.1780443,
    "longitude": -75.2563996,
    "created_at": "2026-03-11T16:46:14.564606+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 161.0,
    "ordinal": 520
  },
  {
    "latitude": -15.1705593,
    "longitude": -75.26838,
    "created_at": "2026-03-11T16:46:14.605866+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 140.0,
    "ordinal": 521
  },
  {
    "latitude": -15.1715221,
    "longitude": -75.2666245,
    "created_at": "2026-03-11T16:46:14.835771+00:00",
    "accuracy": 5.27199983596802,
    "elevation": 178.0,
    "ordinal": 522
  },
  {
    "latitude": -15.1714975,
    "longitude": -75.2666719,
    "created_at": "2026-03-11T16:46:15.15821+00:00",
    "accuracy": 3.21099996566772,
    "elevation": 164.0,
    "ordinal": 523
  },
  {
    "latitude": -15.1715389,
    "longitude": -75.2666297,
    "created_at": "2026-03-11T16:46:15.41095+00:00",
    "accuracy": 2.63599991798401,
    "elevation": 178.0,
    "ordinal": 524
  },
  {
    "latitude": -15.1715469,
    "longitude": -75.2666356,
    "created_at": "2026-03-11T16:46:15.6979+00:00",
    "accuracy": 2.63599991798401,
    "elevation": 178.0,
    "ordinal": 525
  },
  {
    "latitude": -15.17165,
    "longitude": -75.2663622,
    "created_at": "2026-03-11T16:46:15.970244+00:00",
    "accuracy": 3.01300001144409,
    "elevation": 178.0,
    "ordinal": 526
  },
  {
    "latitude": -15.1716983,
    "longitude": -75.266238,
    "created_at": "2026-03-11T16:46:16.266947+00:00",
    "accuracy": 3.15100002288818,
    "elevation": 155.0,
    "ordinal": 527
  },
  {
    "latitude": -15.1715168,
    "longitude": -75.2666383,
    "created_at": "2026-03-11T16:46:16.679852+00:00",
    "accuracy": 3,
    "elevation": 178.0,
    "ordinal": 528
  },
  {
    "latitude": -15.1717524,
    "longitude": -75.2660637,
    "created_at": "2026-03-11T16:46:16.975461+00:00",
    "accuracy": 4.00600004196167,
    "elevation": 155.0,
    "ordinal": 529
  },
  {
    "latitude": -15.1722788,
    "longitude": -75.264884,
    "created_at": "2026-03-11T16:46:17.272094+00:00",
    "accuracy": 4.3270001411438,
    "elevation": 177.0,
    "ordinal": 530
  },
  {
    "latitude": -15.1765707,
    "longitude": -75.2586482,
    "created_at": "2026-03-11T16:46:17.643961+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 164.0,
    "ordinal": 531
  },
  {
    "latitude": -15.1780443,
    "longitude": -75.2563996,
    "created_at": "2026-03-11T16:46:18.058243+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 161.0,
    "ordinal": 532
  },
  {
    "latitude": -15.1806044,
    "longitude": -75.2537514,
    "created_at": "2026-03-11T16:47:21.785209+00:00",
    "accuracy": 8.03499984741211,
    "elevation": 165.0,
    "ordinal": 533
  },
  {
    "latitude": -15.1805868,
    "longitude": -75.2537208,
    "created_at": "2026-03-11T16:48:44.92931+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165.0,
    "ordinal": 534
  },
  {
    "latitude": -15.1805812,
    "longitude": -75.2537165,
    "created_at": "2026-03-11T16:49:42.374445+00:00",
    "accuracy": 0.935000002384186,
    "elevation": 165.0,
    "ordinal": 535
  },
  {
    "latitude": -15.1805487,
    "longitude": -75.2536988,
    "created_at": "2026-03-11T16:49:42.647454+00:00",
    "accuracy": 3.06100010871887,
    "elevation": 165.0,
    "ordinal": 536
  },
  {
    "latitude": -15.1805501,
    "longitude": -75.2537039,
    "created_at": "2026-03-11T16:49:51.461401+00:00",
    "accuracy": 0.935000002384186,
    "elevation": 165.0,
    "ordinal": 537
  },
  {
    "latitude": -15.1805922,
    "longitude": -75.2537157,
    "created_at": "2026-03-11T16:49:56.975105+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165.0,
    "ordinal": 538
  },
  {
    "latitude": -15.1805566,
    "longitude": -75.253725,
    "created_at": "2026-03-11T16:49:57.488095+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165.0,
    "ordinal": 539
  },
  {
    "latitude": -15.1805868,
    "longitude": -75.2537208,
    "created_at": "2026-03-11T16:49:57.904858+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165.0,
    "ordinal": 540
  },
  {
    "latitude": -15.1805087,
    "longitude": -75.253723,
    "created_at": "2026-03-11T16:54:11.440854+00:00",
    "accuracy": 7.05700016021729,
    "elevation": 165.0,
    "ordinal": 541
  },
  {
    "latitude": -15.1810617,
    "longitude": -75.2527488,
    "created_at": "2026-03-11T16:54:11.455456+00:00",
    "accuracy": 10.4589996337891,
    "elevation": 159.0,
    "ordinal": 542
  },
  {
    "latitude": -15.1816419,
    "longitude": -75.2515283,
    "created_at": "2026-03-11T16:54:23.933091+00:00",
    "accuracy": 4.59200000762939,
    "elevation": 158.0,
    "ordinal": 543
  },
  {
    "latitude": -15.1835042,
    "longitude": -75.2499041,
    "created_at": "2026-03-11T16:54:23.956714+00:00",
    "accuracy": 4.59100008010864,
    "elevation": 126.0,
    "ordinal": 544
  },
  {
    "latitude": -15.1805602,
    "longitude": -75.2537212,
    "created_at": "2026-03-11T16:54:55.759086+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165.0,
    "ordinal": 545
  },
  {
    "latitude": -15.1805602,
    "longitude": -75.2537212,
    "created_at": "2026-03-11T16:54:56.322772+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 165.0,
    "ordinal": 546
  },
  {
    "latitude": -15.1866425,
    "longitude": -75.2461724,
    "created_at": "2026-03-11T16:55:52.904339+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 101.0,
    "ordinal": 547
  },
  {
    "latitude": -15.1880626,
    "longitude": -75.245366,
    "created_at": "2026-03-11T16:56:53.154949+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 77.0,
    "ordinal": 548
  },
  {
    "latitude": -15.1915624,
    "longitude": -75.2435485,
    "created_at": "2026-03-11T16:58:53.291579+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 36.0,
    "ordinal": 549
  },
  {
    "latitude": -15.1882897,
    "longitude": -75.2452855,
    "created_at": "2026-03-11T16:58:53.728351+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 77.0,
    "ordinal": 550
  },
  {
    "latitude": -15.1912951,
    "longitude": -75.2449915,
    "created_at": "2026-03-11T16:59:52.852748+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 30.0,
    "ordinal": 551
  },
  {
    "latitude": -15.1894695,
    "longitude": -75.246898,
    "created_at": "2026-03-11T17:00:53.000419+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 29.0,
    "ordinal": 552
  },
  {
    "latitude": -15.1894711,
    "longitude": -75.2469751,
    "created_at": "2026-03-11T17:08:49.266222+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 29.0,
    "ordinal": 553
  },
  {
    "latitude": -15.1894711,
    "longitude": -75.2469751,
    "created_at": "2026-03-11T17:08:49.84673+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 29.0,
    "ordinal": 554
  },
  {
    "latitude": -15.190378,
    "longitude": -75.2468114,
    "created_at": "2026-03-11T17:09:16.704995+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 555
  },
  {
    "latitude": -15.1903876,
    "longitude": -75.2467866,
    "created_at": "2026-03-11T17:12:15.160748+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 556
  },
  {
    "latitude": -15.1904149,
    "longitude": -75.2467641,
    "created_at": "2026-03-11T17:12:59.044444+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 557
  },
  {
    "latitude": -15.1904149,
    "longitude": -75.2467641,
    "created_at": "2026-03-11T17:13:02.267985+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 558
  },
  {
    "latitude": -15.1903876,
    "longitude": -75.2467866,
    "created_at": "2026-03-11T17:13:02.302899+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 559
  },
  {
    "latitude": -15.1850742,
    "longitude": -75.2478435,
    "created_at": "2026-03-11T17:13:02.600222+00:00",
    "accuracy": 4.33599996566772,
    "elevation": 108.0,
    "ordinal": 560
  },
  {
    "latitude": -15.1850742,
    "longitude": -75.2478435,
    "created_at": "2026-03-11T17:13:02.607064+00:00",
    "accuracy": 4.33599996566772,
    "elevation": 108.0,
    "ordinal": 561
  },
  {
    "latitude": -15.1865815,
    "longitude": -75.2461662,
    "created_at": "2026-03-11T17:13:03.068987+00:00",
    "accuracy": 4.76200008392334,
    "elevation": 101.0,
    "ordinal": 562
  },
  {
    "latitude": -15.1865815,
    "longitude": -75.2461662,
    "created_at": "2026-03-11T17:13:03.099544+00:00",
    "accuracy": 4.76200008392334,
    "elevation": 101.0,
    "ordinal": 563
  },
  {
    "latitude": -15.1880218,
    "longitude": -75.2453687,
    "created_at": "2026-03-11T17:13:03.52228+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 77.0,
    "ordinal": 564
  },
  {
    "latitude": -15.1880218,
    "longitude": -75.2453687,
    "created_at": "2026-03-11T17:13:03.656822+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 77.0,
    "ordinal": 565
  },
  {
    "latitude": -15.1902338,
    "longitude": -75.2436307,
    "created_at": "2026-03-11T17:13:03.794153+00:00",
    "accuracy": 4.55700016021729,
    "elevation": 48.0,
    "ordinal": 566
  },
  {
    "latitude": -15.1902338,
    "longitude": -75.2436307,
    "created_at": "2026-03-11T17:13:03.948204+00:00",
    "accuracy": 4.55700016021729,
    "elevation": 48.0,
    "ordinal": 567
  },
  {
    "latitude": -15.191512,
    "longitude": -75.2436268,
    "created_at": "2026-03-11T17:13:04.14617+00:00",
    "accuracy": 7.55100011825562,
    "elevation": 36.0,
    "ordinal": 568
  },
  {
    "latitude": -15.191512,
    "longitude": -75.2436268,
    "created_at": "2026-03-11T17:13:04.312982+00:00",
    "accuracy": 7.55100011825562,
    "elevation": 36.0,
    "ordinal": 569
  },
  {
    "latitude": -15.1913059,
    "longitude": -75.2449484,
    "created_at": "2026-03-11T17:13:04.444713+00:00",
    "accuracy": 4.75099992752075,
    "elevation": 30.0,
    "ordinal": 570
  },
  {
    "latitude": -15.1913059,
    "longitude": -75.2449484,
    "created_at": "2026-03-11T17:13:04.61063+00:00",
    "accuracy": 4.75099992752075,
    "elevation": 30.0,
    "ordinal": 571
  },
  {
    "latitude": -15.1894926,
    "longitude": -75.2468909,
    "created_at": "2026-03-11T17:13:04.78196+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 29.0,
    "ordinal": 572
  },
  {
    "latitude": -15.1894926,
    "longitude": -75.2468909,
    "created_at": "2026-03-11T17:13:05.004142+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 29.0,
    "ordinal": 573
  },
  {
    "latitude": -15.1894698,
    "longitude": -75.2469951,
    "created_at": "2026-03-11T17:13:05.179464+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 29.0,
    "ordinal": 574
  },
  {
    "latitude": -15.1894698,
    "longitude": -75.2469951,
    "created_at": "2026-03-11T17:13:05.458736+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 29.0,
    "ordinal": 575
  },
  {
    "latitude": -15.1895039,
    "longitude": -75.2470118,
    "created_at": "2026-03-11T17:13:05.471714+00:00",
    "accuracy": 3.48600006103516,
    "elevation": 29.0,
    "ordinal": 576
  },
  {
    "latitude": -15.1895548,
    "longitude": -75.2470013,
    "created_at": "2026-03-11T17:13:05.970612+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 29.0,
    "ordinal": 577
  },
  {
    "latitude": -15.1895039,
    "longitude": -75.2470118,
    "created_at": "2026-03-11T17:13:05.984397+00:00",
    "accuracy": 3.48600006103516,
    "elevation": 29.0,
    "ordinal": 578
  },
  {
    "latitude": -15.1895548,
    "longitude": -75.2470013,
    "created_at": "2026-03-11T17:13:06.390432+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 29.0,
    "ordinal": 579
  },
  {
    "latitude": -15.1897292,
    "longitude": -75.2468937,
    "created_at": "2026-03-11T17:13:06.397438+00:00",
    "accuracy": 3,
    "elevation": 29.0,
    "ordinal": 580
  },
  {
    "latitude": -15.1897292,
    "longitude": -75.2468937,
    "created_at": "2026-03-11T17:13:06.639481+00:00",
    "accuracy": 3,
    "elevation": 29.0,
    "ordinal": 581
  },
  {
    "latitude": -15.1900827,
    "longitude": -75.2467535,
    "created_at": "2026-03-11T17:13:06.665993+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 582
  },
  {
    "latitude": -15.1900827,
    "longitude": -75.2467535,
    "created_at": "2026-03-11T17:13:06.90506+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 583
  },
  {
    "latitude": -15.1903814,
    "longitude": -75.246747,
    "created_at": "2026-03-11T17:13:06.928765+00:00",
    "accuracy": 3.0550000667572,
    "elevation": 0.0,
    "ordinal": 584
  },
  {
    "latitude": -15.1903814,
    "longitude": -75.246747,
    "created_at": "2026-03-11T17:13:07.199267+00:00",
    "accuracy": 3.0550000667572,
    "elevation": 0.0,
    "ordinal": 585
  },
  {
    "latitude": -15.1903868,
    "longitude": -75.2467858,
    "created_at": "2026-03-11T17:13:07.220761+00:00",
    "accuracy": 2.89100003242493,
    "elevation": 0.0,
    "ordinal": 586
  },
  {
    "latitude": -15.1903868,
    "longitude": -75.2467858,
    "created_at": "2026-03-11T17:13:07.509945+00:00",
    "accuracy": 2.89100003242493,
    "elevation": 0.0,
    "ordinal": 587
  },
  {
    "latitude": -15.1903228,
    "longitude": -75.2468374,
    "created_at": "2026-03-11T17:13:07.522786+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 588
  },
  {
    "latitude": -15.1903228,
    "longitude": -75.2468374,
    "created_at": "2026-03-11T17:13:07.779717+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 589
  },
  {
    "latitude": -15.1902857,
    "longitude": -75.2468649,
    "created_at": "2026-03-11T17:13:07.832356+00:00",
    "accuracy": 3.06100010871887,
    "elevation": 0.0,
    "ordinal": 590
  },
  {
    "latitude": -15.1902857,
    "longitude": -75.2468649,
    "created_at": "2026-03-11T17:13:08.027603+00:00",
    "accuracy": 3.06100010871887,
    "elevation": 0.0,
    "ordinal": 591
  },
  {
    "latitude": -15.1903954,
    "longitude": -75.2467805,
    "created_at": "2026-03-11T17:13:08.09897+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 592
  },
  {
    "latitude": -15.1903954,
    "longitude": -75.2467805,
    "created_at": "2026-03-11T17:13:08.420424+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 593
  },
  {
    "latitude": -15.1902619,
    "longitude": -75.2466346,
    "created_at": "2026-03-11T17:14:00.362719+00:00",
    "accuracy": 3,
    "elevation": 26.0,
    "ordinal": 594
  },
  {
    "latitude": -15.1902437,
    "longitude": -75.2466273,
    "created_at": "2026-03-11T17:16:21.431471+00:00",
    "accuracy": 6.12200021743774,
    "elevation": 26.0,
    "ordinal": 595
  },
  {
    "latitude": -15.1902491,
    "longitude": -75.2466285,
    "created_at": "2026-03-11T17:16:21.433923+00:00",
    "accuracy": 3,
    "elevation": 26.0,
    "ordinal": 596
  },
  {
    "latitude": -15.190131,
    "longitude": -75.2465251,
    "created_at": "2026-03-11T17:16:51.449781+00:00",
    "accuracy": 3,
    "elevation": 26.0,
    "ordinal": 597
  },
  {
    "latitude": -15.1901275,
    "longitude": -75.2465239,
    "created_at": "2026-03-11T17:17:51.476146+00:00",
    "accuracy": 3,
    "elevation": 26.0,
    "ordinal": 598
  },
  {
    "latitude": -15.1901326,
    "longitude": -75.2465754,
    "created_at": "2026-03-11T17:18:52.149445+00:00",
    "accuracy": 3.40100002288818,
    "elevation": 26.0,
    "ordinal": 599
  },
  {
    "latitude": -15.1901311,
    "longitude": -75.2465918,
    "created_at": "2026-03-11T17:19:51.893858+00:00",
    "accuracy": 3.125,
    "elevation": 26.0,
    "ordinal": 600
  },
  {
    "latitude": -15.1901414,
    "longitude": -75.2465877,
    "created_at": "2026-03-11T17:21:21.465774+00:00",
    "accuracy": 3.14599990844727,
    "elevation": 26.0,
    "ordinal": 601
  },
  {
    "latitude": -15.1902499,
    "longitude": -75.2466454,
    "created_at": "2026-03-11T17:21:52.232024+00:00",
    "accuracy": 2.93499994277954,
    "elevation": 26.0,
    "ordinal": 602
  },
  {
    "latitude": -15.1902501,
    "longitude": -75.2466457,
    "created_at": "2026-03-11T17:22:51.792085+00:00",
    "accuracy": 2.21000003814697,
    "elevation": 26.0,
    "ordinal": 603
  },
  {
    "latitude": -15.1902501,
    "longitude": -75.2466452,
    "created_at": "2026-03-11T17:23:51.956507+00:00",
    "accuracy": 1.87100005149841,
    "elevation": 26.0,
    "ordinal": 604
  },
  {
    "latitude": -15.1900758,
    "longitude": -75.246444,
    "created_at": "2026-03-11T17:29:07.403433+00:00",
    "accuracy": 3,
    "elevation": 26.0,
    "ordinal": 605
  },
  {
    "latitude": -15.1900765,
    "longitude": -75.2464444,
    "created_at": "2026-03-11T17:29:07.412353+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 26.0,
    "ordinal": 606
  },
  {
    "latitude": -15.192317,
    "longitude": -75.2443859,
    "created_at": "2026-03-11T17:35:31.224952+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 21.0,
    "ordinal": 607
  },
  {
    "latitude": -15.1902335,
    "longitude": -75.2466233,
    "created_at": "2026-03-11T17:35:31.22497+00:00",
    "accuracy": 3.13100004196167,
    "elevation": 26.0,
    "ordinal": 608
  },
  {
    "latitude": -15.190289,
    "longitude": -75.2462449,
    "created_at": "2026-03-11T17:35:31.451966+00:00",
    "accuracy": 3.375,
    "elevation": 26.0,
    "ordinal": 609
  },
  {
    "latitude": -15.190374,
    "longitude": -75.2468161,
    "created_at": "2026-03-11T17:35:48.317652+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 610
  },
  {
    "latitude": -15.190374,
    "longitude": -75.2468161,
    "created_at": "2026-03-11T17:35:49.310405+00:00",
    "accuracy": 3,
    "elevation": 0.0,
    "ordinal": 611
  },
  {
    "latitude": -15.1948177,
    "longitude": -75.2420068,
    "created_at": "2026-03-11T17:36:01.866663+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 20.0,
    "ordinal": 612
  },
  {
    "latitude": -15.1963315,
    "longitude": -75.2409048,
    "created_at": "2026-03-11T17:37:04.965658+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 13.0,
    "ordinal": 613
  },
  {
    "latitude": -15.1902335,
    "longitude": -75.2466233,
    "created_at": "2026-03-11T17:37:20.314302+00:00",
    "accuracy": 3.13100004196167,
    "elevation": 26.0,
    "ordinal": 614
  },
  {
    "latitude": -15.1901135,
    "longitude": -75.2465021,
    "created_at": "2026-03-11T17:37:20.648645+00:00",
    "accuracy": 3.02300000190735,
    "elevation": 26.0,
    "ordinal": 615
  },
  {
    "latitude": -15.190055,
    "longitude": -75.2464407,
    "created_at": "2026-03-11T17:37:20.977323+00:00",
    "accuracy": 3.14599990844727,
    "elevation": 26.0,
    "ordinal": 616
  },
  {
    "latitude": -15.1965942,
    "longitude": -75.2399964,
    "created_at": "2026-03-11T17:38:52.06312+00:00",
    "accuracy": 3,
    "elevation": 32.0,
    "ordinal": 617
  },
  {
    "latitude": -15.1900758,
    "longitude": -75.246444,
    "created_at": "2026-03-11T17:38:52.418582+00:00",
    "accuracy": 3,
    "elevation": 26.0,
    "ordinal": 618
  },
  {
    "latitude": -15.1964161,
    "longitude": -75.2405617,
    "created_at": "2026-03-11T17:38:52.455404+00:00",
    "accuracy": 3,
    "elevation": 28.0,
    "ordinal": 619
  },
  {
    "latitude": -15.1902335,
    "longitude": -75.2466233,
    "created_at": "2026-03-11T17:38:52.525922+00:00",
    "accuracy": 3.13100004196167,
    "elevation": 26.0,
    "ordinal": 620
  },
  {
    "latitude": -15.1902335,
    "longitude": -75.2466233,
    "created_at": "2026-03-11T17:38:52.792767+00:00",
    "accuracy": 3.13100004196167,
    "elevation": 26.0,
    "ordinal": 621
  },
  {
    "latitude": -15.1900765,
    "longitude": -75.2464444,
    "created_at": "2026-03-11T17:38:52.795176+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 26.0,
    "ordinal": 622
  },
  {
    "latitude": -15.1901135,
    "longitude": -75.2465021,
    "created_at": "2026-03-11T17:38:52.858378+00:00",
    "accuracy": 3.02300000190735,
    "elevation": 26.0,
    "ordinal": 623
  },
  {
    "latitude": -15.1901135,
    "longitude": -75.2465021,
    "created_at": "2026-03-11T17:38:53.167743+00:00",
    "accuracy": 3.02300000190735,
    "elevation": 26.0,
    "ordinal": 624
  },
  {
    "latitude": -15.190055,
    "longitude": -75.2464407,
    "created_at": "2026-03-11T17:38:53.181965+00:00",
    "accuracy": 3.14599990844727,
    "elevation": 26.0,
    "ordinal": 625
  },
  {
    "latitude": -15.190084,
    "longitude": -75.2464483,
    "created_at": "2026-03-11T17:38:53.187809+00:00",
    "accuracy": 3.06100010871887,
    "elevation": 26.0,
    "ordinal": 626
  },
  {
    "latitude": -15.190055,
    "longitude": -75.2464407,
    "created_at": "2026-03-11T17:38:53.507611+00:00",
    "accuracy": 3.14599990844727,
    "elevation": 26.0,
    "ordinal": 627
  },
  {
    "latitude": -15.1900765,
    "longitude": -75.2464498,
    "created_at": "2026-03-11T17:38:53.520116+00:00",
    "accuracy": 3.06100010871887,
    "elevation": 26.0,
    "ordinal": 628
  },
  {
    "latitude": -15.1900758,
    "longitude": -75.246444,
    "created_at": "2026-03-11T17:38:53.522873+00:00",
    "accuracy": 3,
    "elevation": 26.0,
    "ordinal": 629
  },
  {
    "latitude": -15.1900758,
    "longitude": -75.246444,
    "created_at": "2026-03-11T17:38:53.83063+00:00",
    "accuracy": 3,
    "elevation": 26.0,
    "ordinal": 630
  },
  {
    "latitude": -15.1900765,
    "longitude": -75.2464444,
    "created_at": "2026-03-11T17:38:53.849264+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 26.0,
    "ordinal": 631
  },
  {
    "latitude": -15.190076,
    "longitude": -75.246449,
    "created_at": "2026-03-11T17:38:53.895928+00:00",
    "accuracy": 3,
    "elevation": 26.0,
    "ordinal": 632
  },
  {
    "latitude": -15.1900765,
    "longitude": -75.2464444,
    "created_at": "2026-03-11T17:38:54.17741+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 26.0,
    "ordinal": 633
  },
  {
    "latitude": -15.190084,
    "longitude": -75.2464483,
    "created_at": "2026-03-11T17:38:54.181375+00:00",
    "accuracy": 3.06100010871887,
    "elevation": 26.0,
    "ordinal": 634
  },
  {
    "latitude": -15.1900753,
    "longitude": -75.2464668,
    "created_at": "2026-03-11T17:38:54.236937+00:00",
    "accuracy": 4.67600011825562,
    "elevation": 26.0,
    "ordinal": 635
  },
  {
    "latitude": -15.190084,
    "longitude": -75.2464483,
    "created_at": "2026-03-11T17:38:54.526049+00:00",
    "accuracy": 3.06100010871887,
    "elevation": 26.0,
    "ordinal": 636
  },
  {
    "latitude": -15.1900765,
    "longitude": -75.2464498,
    "created_at": "2026-03-11T17:38:54.537746+00:00",
    "accuracy": 3.06100010871887,
    "elevation": 26.0,
    "ordinal": 637
  },
  {
    "latitude": -15.190289,
    "longitude": -75.2462449,
    "created_at": "2026-03-11T17:38:54.546519+00:00",
    "accuracy": 3.375,
    "elevation": 26.0,
    "ordinal": 638
  },
  {
    "latitude": -15.1900765,
    "longitude": -75.2464498,
    "created_at": "2026-03-11T17:38:54.853556+00:00",
    "accuracy": 3.06100010871887,
    "elevation": 26.0,
    "ordinal": 639
  },
  {
    "latitude": -15.190076,
    "longitude": -75.246449,
    "created_at": "2026-03-11T17:38:54.870015+00:00",
    "accuracy": 3,
    "elevation": 26.0,
    "ordinal": 640
  },
  {
    "latitude": -15.192317,
    "longitude": -75.2443859,
    "created_at": "2026-03-11T17:38:54.897514+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 21.0,
    "ordinal": 641
  },
  {
    "latitude": -15.190076,
    "longitude": -75.246449,
    "created_at": "2026-03-11T17:38:55.197226+00:00",
    "accuracy": 3,
    "elevation": 26.0,
    "ordinal": 642
  },
  {
    "latitude": -15.1900753,
    "longitude": -75.2464668,
    "created_at": "2026-03-11T17:38:55.216236+00:00",
    "accuracy": 4.67600011825562,
    "elevation": 26.0,
    "ordinal": 643
  },
  {
    "latitude": -15.1943908,
    "longitude": -75.2422407,
    "created_at": "2026-03-11T17:38:55.237148+00:00",
    "accuracy": 5.27199983596802,
    "elevation": 20.0,
    "ordinal": 644
  },
  {
    "latitude": -15.1900753,
    "longitude": -75.2464668,
    "created_at": "2026-03-11T17:38:55.743835+00:00",
    "accuracy": 4.67600011825562,
    "elevation": 26.0,
    "ordinal": 645
  },
  {
    "latitude": -15.1963176,
    "longitude": -75.2409142,
    "created_at": "2026-03-11T17:38:55.751251+00:00",
    "accuracy": 5.05499982833862,
    "elevation": 13.0,
    "ordinal": 646
  },
  {
    "latitude": -15.190289,
    "longitude": -75.2462449,
    "created_at": "2026-03-11T17:38:55.760038+00:00",
    "accuracy": 3.375,
    "elevation": 26.0,
    "ordinal": 647
  },
  {
    "latitude": -15.190289,
    "longitude": -75.2462449,
    "created_at": "2026-03-11T17:38:56.06232+00:00",
    "accuracy": 3.375,
    "elevation": 26.0,
    "ordinal": 648
  },
  {
    "latitude": -15.192317,
    "longitude": -75.2443859,
    "created_at": "2026-03-11T17:38:56.0922+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 21.0,
    "ordinal": 649
  },
  {
    "latitude": -15.1943908,
    "longitude": -75.2422407,
    "created_at": "2026-03-11T17:38:56.40268+00:00",
    "accuracy": 5.27199983596802,
    "elevation": 20.0,
    "ordinal": 650
  },
  {
    "latitude": -15.192317,
    "longitude": -75.2443859,
    "created_at": "2026-03-11T17:38:56.405603+00:00",
    "accuracy": 4.08099985122681,
    "elevation": 21.0,
    "ordinal": 651
  },
  {
    "latitude": -15.1963176,
    "longitude": -75.2409142,
    "created_at": "2026-03-11T17:38:56.737504+00:00",
    "accuracy": 5.05499982833862,
    "elevation": 13.0,
    "ordinal": 652
  },
  {
    "latitude": -15.1943908,
    "longitude": -75.2422407,
    "created_at": "2026-03-11T17:38:56.757244+00:00",
    "accuracy": 5.27199983596802,
    "elevation": 20.0,
    "ordinal": 653
  },
  {
    "latitude": -15.1963176,
    "longitude": -75.2409142,
    "created_at": "2026-03-11T17:38:57.106565+00:00",
    "accuracy": 5.05499982833862,
    "elevation": 13.0,
    "ordinal": 654
  },
  {
    "latitude": -15.1977661,
    "longitude": -75.2390944,
    "created_at": "2026-03-11T17:43:16.437446+00:00",
    "accuracy": 3.01099991798401,
    "elevation": 27.0,
    "ordinal": 655
  },
  {
    "latitude": -15.1965885,
    "longitude": -75.23996,
    "created_at": "2026-03-11T17:43:16.971575+00:00",
    "accuracy": 3.4909999370575,
    "elevation": 32.0,
    "ordinal": 656
  },
  {
    "latitude": -15.1970343,
    "longitude": -75.2397263,
    "created_at": "2026-03-11T17:43:17.50915+00:00",
    "accuracy": 4.31699991226196,
    "elevation": 28.0,
    "ordinal": 657
  },
  {
    "latitude": -15.1977273,
    "longitude": -75.2385896,
    "created_at": "2026-03-11T17:45:40.165362+00:00",
    "accuracy": 6.51399993896484,
    "elevation": 27.0,
    "ordinal": 658
  },
  {
    "latitude": -15.1970684,
    "longitude": -75.239746,
    "created_at": "2026-03-11T18:19:22.519094+00:00",
    "accuracy": 3.00999999046326,
    "elevation": 28.0,
    "ordinal": 659
  },
  {
    "latitude": -15.197318,
    "longitude": -75.2392839,
    "created_at": "2026-03-11T18:19:23.340281+00:00",
    "accuracy": 3,
    "elevation": 28.0,
    "ordinal": 660
  },
  {
    "latitude": -15.1975537,
    "longitude": -75.2391946,
    "created_at": "2026-03-11T18:19:23.735707+00:00",
    "accuracy": 3,
    "elevation": 10.0,
    "ordinal": 661
  },
  {
    "latitude": -15.1977691,
    "longitude": -75.2391153,
    "created_at": "2026-03-11T18:19:24.364668+00:00",
    "accuracy": 3,
    "elevation": 27.0,
    "ordinal": 662
  },
  {
    "latitude": -15.1977647,
    "longitude": -75.2390746,
    "created_at": "2026-03-11T18:19:24.838215+00:00",
    "accuracy": 3.13499999046326,
    "elevation": 27.0,
    "ordinal": 663
  },
  {
    "latitude": -15.1977313,
    "longitude": -75.2390318,
    "created_at": "2026-03-11T18:19:25.121965+00:00",
    "accuracy": 4.16400003433228,
    "elevation": 27.0,
    "ordinal": 664
  },
  {
    "latitude": -15.1981016,
    "longitude": -75.2371518,
    "created_at": "2026-03-11T18:19:25.502691+00:00",
    "accuracy": 4.93200016021729,
    "elevation": 28.0,
    "ordinal": 665
  },
  {
    "latitude": -15.1993763,
    "longitude": -75.2346105,
    "created_at": "2026-03-11T18:19:25.798703+00:00",
    "accuracy": 5.69700002670288,
    "elevation": 38.0,
    "ordinal": 666
  },
  {
    "latitude": -15.200691,
    "longitude": -75.2323851,
    "created_at": "2026-03-11T18:19:26.35404+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 50.0,
    "ordinal": 667
  },
  {
    "latitude": -15.2022307,
    "longitude": -75.2309161,
    "created_at": "2026-03-11T18:19:26.616751+00:00",
    "accuracy": 5.9520001411438,
    "elevation": 34.0,
    "ordinal": 668
  },
  {
    "latitude": -15.2038251,
    "longitude": -75.2295387,
    "created_at": "2026-03-11T18:19:26.879107+00:00",
    "accuracy": 5.35699987411499,
    "elevation": 27.0,
    "ordinal": 669
  },
  {
    "latitude": -15.2044199,
    "longitude": -75.2289279,
    "created_at": "2026-03-11T18:19:27.161371+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 23.0,
    "ordinal": 670
  },
  {
    "latitude": -15.2053697,
    "longitude": -75.2281231,
    "created_at": "2026-03-11T18:19:27.426902+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 23.0,
    "ordinal": 671
  },
  {
    "latitude": -15.2077435,
    "longitude": -75.2260664,
    "created_at": "2026-03-11T18:19:27.707527+00:00",
    "accuracy": 4.59200000762939,
    "elevation": 20.0,
    "ordinal": 672
  },
  {
    "latitude": -15.2108006,
    "longitude": -75.2227878,
    "created_at": "2026-03-11T18:19:27.984723+00:00",
    "accuracy": 4.84600019454956,
    "elevation": 27.0,
    "ordinal": 673
  },
  {
    "latitude": -15.2147148,
    "longitude": -75.2203739,
    "created_at": "2026-03-11T18:19:28.249775+00:00",
    "accuracy": 5.10200023651123,
    "elevation": 26.0,
    "ordinal": 674
  },
  {
    "latitude": -15.2174163,
    "longitude": -75.2190124,
    "created_at": "2026-03-11T18:19:28.509174+00:00",
    "accuracy": 4.25099992752075,
    "elevation": 31.0,
    "ordinal": 675
  },
  {
    "latitude": -15.2186613,
    "longitude": -75.2178091,
    "created_at": "2026-03-11T18:19:28.767497+00:00",
    "accuracy": 4.59200000762939,
    "elevation": 32.0,
    "ordinal": 676
  },
  {
    "latitude": -15.2207056,
    "longitude": -75.2166937,
    "created_at": "2026-03-11T18:19:29.019246+00:00",
    "accuracy": 4.50699996948242,
    "elevation": 33.0,
    "ordinal": 677
  },
  {
    "latitude": -15.2229033,
    "longitude": -75.2157293,
    "created_at": "2026-03-11T18:19:29.269069+00:00",
    "accuracy": 5.61199998855591,
    "elevation": 35.0,
    "ordinal": 678
  },
  {
    "latitude": -15.2249854,
    "longitude": -75.2149824,
    "created_at": "2026-03-11T18:19:29.523727+00:00",
    "accuracy": 5.01700019836426,
    "elevation": 31.0,
    "ordinal": 679
  },
  {
    "latitude": -15.22718,
    "longitude": -75.2142304,
    "created_at": "2026-03-11T18:19:29.779438+00:00",
    "accuracy": 4.67700004577637,
    "elevation": 33.0,
    "ordinal": 680
  },
  {
    "latitude": -15.2293613,
    "longitude": -75.2134452,
    "created_at": "2026-03-11T18:19:30.0295+00:00",
    "accuracy": 4.76200008392334,
    "elevation": 28.0,
    "ordinal": 681
  },
  {
    "latitude": -15.2319423,
    "longitude": -75.2125603,
    "created_at": "2026-03-11T18:19:30.291508+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 27.0,
    "ordinal": 682
  },
  {
    "latitude": -15.2345992,
    "longitude": -75.211689,
    "created_at": "2026-03-11T18:19:30.57837+00:00",
    "accuracy": 3.82599997520447,
    "elevation": 18.0,
    "ordinal": 683
  },
  {
    "latitude": -15.237658,
    "longitude": -75.2109934,
    "created_at": "2026-03-11T18:19:30.815154+00:00",
    "accuracy": 6.25,
    "elevation": 32.0,
    "ordinal": 684
  },
  {
    "latitude": -15.241321,
    "longitude": -75.2110265,
    "created_at": "2026-03-11T18:19:31.058521+00:00",
    "accuracy": 4.08199977874756,
    "elevation": 34.0,
    "ordinal": 685
  },
  {
    "latitude": -15.2438809,
    "longitude": -75.2120519,
    "created_at": "2026-03-11T18:19:31.299123+00:00",
    "accuracy": 4.76200008392334,
    "elevation": 23.0,
    "ordinal": 686
  },
  {
    "latitude": -15.2473245,
    "longitude": -75.2141858,
    "created_at": "2026-03-11T18:19:31.573792+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 5.0,
    "ordinal": 687
  },
  {
    "latitude": -15.2513061,
    "longitude": -75.2159909,
    "created_at": "2026-03-11T18:19:31.83316+00:00",
    "accuracy": 3.82599997520447,
    "elevation": 11.0,
    "ordinal": 688
  },
  {
    "latitude": -15.2535862,
    "longitude": -75.2194172,
    "created_at": "2026-03-11T18:19:32.080017+00:00",
    "accuracy": 4.16699981689453,
    "elevation": 29.0,
    "ordinal": 689
  },
  {
    "latitude": -15.2566738,
    "longitude": -75.2221307,
    "created_at": "2026-03-11T18:19:32.334816+00:00",
    "accuracy": 3.82599997520447,
    "elevation": 23.0,
    "ordinal": 690
  },
  {
    "latitude": -15.260398,
    "longitude": -75.2272786,
    "created_at": "2026-03-11T18:19:32.56565+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 34.0,
    "ordinal": 691
  },
  {
    "latitude": -15.2622214,
    "longitude": -75.2252009,
    "created_at": "2026-03-11T18:19:32.797525+00:00",
    "accuracy": 3.31599998474121,
    "elevation": 40.0,
    "ordinal": 692
  },
  {
    "latitude": -15.2643359,
    "longitude": -75.219305,
    "created_at": "2026-03-11T18:19:33.049498+00:00",
    "accuracy": 3.82599997520447,
    "elevation": 56.0,
    "ordinal": 693
  },
  {
    "latitude": -15.2679055,
    "longitude": -75.2155497,
    "created_at": "2026-03-11T18:19:33.290171+00:00",
    "accuracy": 4.16599988937378,
    "elevation": 67.0,
    "ordinal": 694
  },
  {
    "latitude": -15.2702508,
    "longitude": -75.2099495,
    "created_at": "2026-03-11T18:19:33.538737+00:00",
    "accuracy": 3.40100002288818,
    "elevation": 81.0,
    "ordinal": 695
  },
  {
    "latitude": -15.2721227,
    "longitude": -75.2056198,
    "created_at": "2026-03-11T18:19:33.779005+00:00",
    "accuracy": 4.33699989318848,
    "elevation": 89.0,
    "ordinal": 696
  },
  {
    "latitude": -15.2747973,
    "longitude": -75.2021245,
    "created_at": "2026-03-11T18:19:34.026335+00:00",
    "accuracy": 4.33599996566772,
    "elevation": 93.0,
    "ordinal": 697
  },
  {
    "latitude": -15.2761577,
    "longitude": -75.2004267,
    "created_at": "2026-03-11T18:19:34.282446+00:00",
    "accuracy": 9.94900035858154,
    "elevation": 97.0,
    "ordinal": 698
  },
  {
    "latitude": -15.2813506,
    "longitude": -75.1958758,
    "created_at": "2026-03-11T18:19:51.486696+00:00",
    "accuracy": 3.65599989891052,
    "elevation": 95.0,
    "ordinal": 699
  },
  {
    "latitude": -15.2869944,
    "longitude": -75.1895472,
    "created_at": "2026-03-11T18:20:51.64008+00:00",
    "accuracy": 4.25099992752075,
    "elevation": 84.0,
    "ordinal": 700
  },
  {
    "latitude": -15.2928875,
    "longitude": -75.1840136,
    "created_at": "2026-03-11T18:21:51.663918+00:00",
    "accuracy": 3.7409999370575,
    "elevation": 86.0,
    "ordinal": 701
  },
  {
    "latitude": -15.2947596,
    "longitude": -75.1824187,
    "created_at": "2026-03-11T18:22:52.182326+00:00",
    "accuracy": 4.25099992752075,
    "elevation": 87.0,
    "ordinal": 702
  },
  {
    "latitude": -15.3015664,
    "longitude": -75.1786058,
    "created_at": "2026-03-11T18:24:01.135795+00:00",
    "accuracy": 5.44199991226196,
    "elevation": 110.0,
    "ordinal": 703
  },
  {
    "latitude": -15.3037363,
    "longitude": -75.1712808,
    "created_at": "2026-03-11T18:24:51.468063+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 100.0,
    "ordinal": 704
  },
  {
    "latitude": -15.3051408,
    "longitude": -75.1689492,
    "created_at": "2026-03-11T18:25:51.651601+00:00",
    "accuracy": 3.57100009918213,
    "elevation": 96.0,
    "ordinal": 705
  },
  {
    "latitude": -15.3051554,
    "longitude": -75.1689661,
    "created_at": "2026-03-11T18:26:51.704753+00:00",
    "accuracy": 1.01999998092651,
    "elevation": 96.0,
    "ordinal": 706
  },
  {
    "latitude": -15.3051515,
    "longitude": -75.1689604,
    "created_at": "2026-03-11T18:27:51.654288+00:00",
    "accuracy": 0.509999990463257,
    "elevation": 96.0,
    "ordinal": 707
  },
  {
    "latitude": -15.3055657,
    "longitude": -75.1681907,
    "created_at": "2026-03-11T18:28:51.678226+00:00",
    "accuracy": 3.91100001335144,
    "elevation": 98.0,
    "ordinal": 708
  },
  {
    "latitude": -15.3090594,
    "longitude": -75.1622516,
    "created_at": "2026-03-11T18:29:51.616621+00:00",
    "accuracy": 3.7409999370575,
    "elevation": 94.0,
    "ordinal": 709
  },
  {
    "latitude": -15.3133936,
    "longitude": -75.1560717,
    "created_at": "2026-03-11T18:30:51.59421+00:00",
    "accuracy": 3.82599997520447,
    "elevation": 85.0,
    "ordinal": 710
  },
  {
    "latitude": -15.3193651,
    "longitude": -75.1513038,
    "created_at": "2026-03-11T18:31:51.569481+00:00",
    "accuracy": 4.16699981689453,
    "elevation": 83.0,
    "ordinal": 711
  },
  {
    "latitude": -15.3253062,
    "longitude": -75.1483403,
    "created_at": "2026-03-11T18:32:51.527746+00:00",
    "accuracy": 3.7409999370575,
    "elevation": 62.0,
    "ordinal": 712
  },
  {
    "latitude": -15.3329839,
    "longitude": -75.1467876,
    "created_at": "2026-03-11T18:33:52.061226+00:00",
    "accuracy": 3.65599989891052,
    "elevation": 54.0,
    "ordinal": 713
  },
  {
    "latitude": -15.3405865,
    "longitude": -75.1452361,
    "created_at": "2026-03-11T18:34:51.484506+00:00",
    "accuracy": 4.84700012207031,
    "elevation": 37.0,
    "ordinal": 714
  },
  {
    "latitude": -15.3461419,
    "longitude": -75.1442725,
    "created_at": "2026-03-11T18:35:51.568843+00:00",
    "accuracy": 3.99600005149841,
    "elevation": 29.0,
    "ordinal": 715
  },
  {
    "latitude": -15.3520906,
    "longitude": -75.1463944,
    "created_at": "2026-03-11T18:36:51.542417+00:00",
    "accuracy": 8.38199996948242,
    "elevation": 27.0,
    "ordinal": 716
  },
  {
    "latitude": -15.3521356,
    "longitude": -75.1463581,
    "created_at": "2026-03-11T18:37:51.513784+00:00",
    "accuracy": 11.1020002365112,
    "elevation": 27.0,
    "ordinal": 717
  },
  {
    "latitude": -15.3532227,
    "longitude": -75.1476853,
    "created_at": "2026-03-11T18:38:51.484813+00:00",
    "accuracy": 3.91100001335144,
    "elevation": 18.0,
    "ordinal": 718
  },
  {
    "latitude": -15.3574815,
    "longitude": -75.1532002,
    "created_at": "2026-03-11T18:39:51.495079+00:00",
    "accuracy": 3.7409999370575,
    "elevation": 15.0,
    "ordinal": 719
  },
  {
    "latitude": -15.3600247,
    "longitude": -75.1571118,
    "created_at": "2026-03-11T18:40:51.501413+00:00",
    "accuracy": 3.69799995422363,
    "elevation": 18.0,
    "ordinal": 720
  },
  {
    "latitude": -15.3599948,
    "longitude": -75.1573485,
    "created_at": "2026-03-11T18:41:51.914687+00:00",
    "accuracy": 8.06099987030029,
    "elevation": 15.0,
    "ordinal": 721
  },
  {
    "latitude": -15.3608757,
    "longitude": -75.1585672,
    "created_at": "2026-03-11T18:42:51.68927+00:00",
    "accuracy": 3.65599989891052,
    "elevation": 12.0,
    "ordinal": 722
  },
  {
    "latitude": -15.3617383,
    "longitude": -75.1631884,
    "created_at": "2026-03-11T18:43:51.876631+00:00",
    "accuracy": 4.67700004577637,
    "elevation": 27.0,
    "ordinal": 723
  },
  {
    "latitude": -15.3617128,
    "longitude": -75.164545,
    "created_at": "2026-03-11T18:44:51.644368+00:00",
    "accuracy": 10.1389999389648,
    "elevation": 29.0,
    "ordinal": 724
  },
  {
    "latitude": -15.3616675,
    "longitude": -75.1669416,
    "created_at": "2026-03-11T18:45:51.579347+00:00",
    "accuracy": 12.4790000915527,
    "elevation": 36.0,
    "ordinal": 725
  },
  {
    "latitude": -15.3621969,
    "longitude": -75.1664884,
    "created_at": "2026-03-11T19:21:43.970232+00:00",
    "accuracy": 13.28600025177,
    "elevation": 31.0,
    "ordinal": 726
  },
  {
    "latitude": -15.1977273,
    "longitude": -75.2385896,
    "created_at": "2026-03-11T19:21:44.538745+00:00",
    "accuracy": 6.51399993896484,
    "elevation": 27.0,
    "ordinal": 727
  },
  {
    "latitude": -15.1983197,
    "longitude": -75.2365606,
    "created_at": "2026-03-11T19:21:45.157553+00:00",
    "accuracy": 3.78999996185303,
    "elevation": 32.0,
    "ordinal": 728
  }
];
