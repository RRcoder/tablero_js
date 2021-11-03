var t;

$(window).on('load', function () {
    var operarios=[1, 5, 123];
    var operariosnombres=['Juan Perez','Pedro Garcia','Sebastian Mastropiero'];
    var tareas=[
  {
    "id": "448739",
    "idor1": "284061",
    "operario": "1",
    "tipo": " ",
    "nroorden": "80061341",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": null,
    "horaini": null,
    "fechafin": null,
    "horafin": null,
    "tiempo": "0.00",
    "fecha_prev": "2021-11-03",
    "horaprei": "09:40",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "10:10",
    "estado": " ",
    "nombre_op": "Juan Perez         ",
    "horaini_n": 9.6666666666667,
    "horafin_n": 10.166666666667,
    "horaprei_n": 9.6666666666667,
    "horapref_n": 10.166666666667,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "NoIniciada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A33"
  },
  {
    "id": "448784",
    "idor1": "285771",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062386",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": null,
    "horaini": null,
    "fechafin": null,
    "horafin": null,
    "tiempo": "0.00",
    "fecha_prev": "2021-11-03",
    "horaprei": "15:32",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "16:13",
    "estado": " ",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 15.533333333333,
    "horafin_n": 16.216666666667,
    "horaprei_n": 15.533333333333,
    "horapref_n": 16.216666666667,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "NoIniciada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A23"
  },
  {
    "id": "448785",
    "idor1": "285415",
    "operario": "123",
    "tipo": " ",
    "nroorden": "80062345",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": null,
    "horaini": null,
    "fechafin": null,
    "horafin": null,
    "tiempo": "0.00",
    "fecha_prev": "2021-11-03",
    "horaprei": "15:48",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "16:18",
    "estado": " ",
    "nombre_op": "Sebastian Mastropiero  ",
    "horaini_n": 15.8,
    "horafin_n": 16.3,
    "horaprei_n": 15.8,
    "horapref_n": 16.3,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "NoIniciada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A01"
  },
  {
    "id": "448776",
    "idor1": "284722",
    "operario": "1",
    "tipo": " ",
    "nroorden": "80061713",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "15:48",
    "fechafin": null,
    "horafin": null,
    "tiempo": "0.00",
    "fecha_prev": "2021-11-03",
    "horaprei": "15:48",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "16:18",
    "estado": "A",
    "nombre_op": "Juan Perez         ",
    "horaini_n": 15.8,
    "horafin_n": "16.4667",
    "horaprei_n": 15.8,
    "horapref_n": 16.3,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Iniciada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A29"
  },
  {
    "id": "448782",
    "idor1": "285748",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062559",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "16:19",
    "fechafin": null,
    "horafin": null,
    "tiempo": "0.00",
    "fecha_prev": "2021-11-03",
    "horaprei": "16:19",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "16:53",
    "estado": "A",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 16.316666666667,
    "horafin_n": "16.4667",
    "horaprei_n": 16.316666666667,
    "horapref_n": 16.883333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Iniciada",
    "color_t2": "E",
    "tipotarea": "E",
    "cono": "A17"
  },
  {
    "id": "448644",
    "idor1": "285410",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062305",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "15:15",
    "fechafin": "2021-11-03",
    "horafin": "15:24",
    "tiempo": "0.15",
    "fecha_prev": "2021-11-03",
    "horaprei": "15:15",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "16:15",
    "estado": "C",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 15.25,
    "horafin_n": 15.4,
    "horaprei_n": 15.25,
    "horapref_n": 16.25,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "O",
    "tipotarea": "O",
    "cono": "A31"
  },
  {
    "id": "448703",
    "idor1": "285768",
    "operario": "123",
    "tipo": " ",
    "nroorden": "80062608",
    "sucursal": "5",
    "service": "23",
    "tarea": "0",
    "fechaini": "2021-11-03",
    "horaini": "08:07",
    "fechafin": "2021-11-03",
    "horafin": "08:58",
    "tiempo": "0.85",
    "fecha_prev": "2021-11-03",
    "horaprei": "08:07",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "08:37",
    "estado": "C",
    "nombre_op": "Sebastian Mastropiero  ",
    "horaini_n": 8.1166666666667,
    "horafin_n": 8.9666666666667,
    "horaprei_n": 8.1166666666667,
    "horapref_n": 8.6166666666667,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A41"
  },
  {
    "id": "448712",
    "idor1": "285781",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062372",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "09:07",
    "fechafin": "2021-11-03",
    "horafin": "10:19",
    "tiempo": "1.20",
    "fecha_prev": "2021-11-03",
    "horaprei": "09:07",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "10:07",
    "estado": "C",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 9.1166666666667,
    "horafin_n": 10.316666666667,
    "horaprei_n": 9.1166666666667,
    "horapref_n": 10.116666666667,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "E",
    "tipotarea": "E",
    "cono": "A04"
  },
  {
    "id": "448713",
    "idor1": "285358",
    "operario": "123",
    "tipo": " ",
    "nroorden": "80062321",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "08:58",
    "fechafin": "2021-11-03",
    "horafin": "10:14",
    "tiempo": "1.27",
    "fecha_prev": "2021-11-03",
    "horaprei": "08:58",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "09:58",
    "estado": "C",
    "nombre_op": "Sebastian Mastropiero  ",
    "horaini_n": 8.9666666666667,
    "horafin_n": 10.233333333333,
    "horaprei_n": 8.9666666666667,
    "horapref_n": 9.9666666666667,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A03"
  },
  {
    "id": "448716",
    "idor1": "285335",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062287",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "08:49",
    "fechafin": "2021-11-03",
    "horafin": "09:07",
    "tiempo": "0.30",
    "fecha_prev": "2021-11-03",
    "horaprei": "08:49",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "09:19",
    "estado": "C",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 8.8166666666667,
    "horafin_n": 9.1166666666667,
    "horaprei_n": 8.8166666666667,
    "horapref_n": 9.3166666666667,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "E",
    "tipotarea": "E",
    "cono": "A17"
  },
  {
    "id": "448717",
    "idor1": "285786",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062371",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "10:24",
    "fechafin": "2021-11-03",
    "horafin": "11:14",
    "tiempo": "0.83",
    "fecha_prev": "2021-11-03",
    "horaprei": "10:24",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "11:24",
    "estado": "C",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 10.4,
    "horafin_n": 11.233333333333,
    "horaprei_n": 10.4,
    "horapref_n": 11.4,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "O",
    "tipotarea": "O",
    "cono": "A11"
  },
  {
    "id": "448718",
    "idor1": "285787",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062371",
    "sucursal": "5",
    "service": "0",
    "tarea": "99902",
    "fechaini": "2021-11-03",
    "horaini": "11:14",
    "fechafin": "2021-11-03",
    "horafin": "11:44",
    "tiempo": "0.50",
    "fecha_prev": "2021-11-03",
    "horaprei": "11:14",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "12:44",
    "estado": "C",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 11.233333333333,
    "horafin_n": 11.733333333333,
    "horaprei_n": 11.233333333333,
    "horapref_n": 12.733333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "O",
    "tipotarea": "O",
    "cono": "A11"
  },
  {
    "id": "448719",
    "idor1": "285788",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062371",
    "sucursal": "5",
    "service": "0",
    "tarea": "99903",
    "fechaini": "2021-11-03",
    "horaini": "11:44",
    "fechafin": "2021-11-03",
    "horafin": "11:59",
    "tiempo": "0.25",
    "fecha_prev": "2021-11-03",
    "horaprei": "11:44",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "11:56",
    "estado": "C",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 11.733333333333,
    "horafin_n": 11.983333333333,
    "horaprei_n": 11.733333333333,
    "horapref_n": 11.933333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "O",
    "tipotarea": "O",
    "cono": "A11"
  },
  {
    "id": "448720",
    "idor1": "285411",
    "operario": "123",
    "tipo": " ",
    "nroorden": "80062345",
    "sucursal": "5",
    "service": "6",
    "tarea": "0",
    "fechaini": "2021-11-03",
    "horaini": "10:14",
    "fechafin": "2021-11-03",
    "horafin": "11:50",
    "tiempo": "1.60",
    "fecha_prev": "2021-11-03",
    "horaprei": "10:14",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "11:20",
    "estado": "C",
    "nombre_op": "Sebastian Mastropiero  ",
    "horaini_n": 10.233333333333,
    "horafin_n": 11.833333333333,
    "horaprei_n": 10.233333333333,
    "horapref_n": 11.333333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "S",
    "tipotarea": "S",
    "cono": "A01"
  },
  {
    "id": "448747",
    "idor1": "285772",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062403",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "13:47",
    "fechafin": "2021-11-03",
    "horafin": "14:17",
    "tiempo": "0.50",
    "fecha_prev": "2021-11-03",
    "horaprei": "13:47",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "14:47",
    "estado": "C",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 13.783333333333,
    "horafin_n": 14.283333333333,
    "horaprei_n": 13.783333333333,
    "horapref_n": 14.783333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "E",
    "tipotarea": "E",
    "cono": "A36"
  },
  {
    "id": "448752",
    "idor1": "285522",
    "operario": "1",
    "tipo": " ",
    "nroorden": "80062423",
    "sucursal": "5",
    "service": "2",
    "tarea": "0",
    "fechaini": "2021-11-03",
    "horaini": "13:35",
    "fechafin": "2021-11-03",
    "horafin": "15:23",
    "tiempo": "1.80",
    "fecha_prev": "2021-11-03",
    "horaprei": "13:35",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "14:41",
    "estado": "C",
    "nombre_op": "Juan Perez         ",
    "horaini_n": 13.583333333333,
    "horafin_n": 15.383333333333,
    "horaprei_n": 13.583333333333,
    "horapref_n": 14.683333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "S",
    "tipotarea": "S",
    "cono": "A50"
  },
  {
    "id": "448753",
    "idor1": "285808",
    "operario": "1",
    "tipo": " ",
    "nroorden": "80062423",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "15:23",
    "fechafin": "2021-11-03",
    "horafin": "15:48",
    "tiempo": "0.42",
    "fecha_prev": "2021-11-03",
    "horaprei": "15:23",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "15:53",
    "estado": "C",
    "nombre_op": "Juan Perez         ",
    "horaini_n": 15.383333333333,
    "horafin_n": 15.8,
    "horaprei_n": 15.383333333333,
    "horapref_n": 15.883333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "C",
    "tipotarea": "C",
    "cono": "A50"
  },
  {
    "id": "448760",
    "idor1": "285481",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062390",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "14:17",
    "fechafin": "2021-11-03",
    "horafin": "14:38",
    "tiempo": "0.35",
    "fecha_prev": "2021-11-03",
    "horaprei": "14:17",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "14:53",
    "estado": "C",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 14.283333333333,
    "horafin_n": 14.633333333333,
    "horaprei_n": 14.283333333333,
    "horapref_n": 14.883333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "E",
    "tipotarea": "E",
    "cono": "A38"
  },
  {
    "id": "448761",
    "idor1": "285812",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062390",
    "sucursal": "5",
    "service": "0",
    "tarea": "99902",
    "fechaini": "2021-11-03",
    "horaini": "14:38",
    "fechafin": "2021-11-03",
    "horafin": "14:49",
    "tiempo": "0.18",
    "fecha_prev": "2021-11-03",
    "horaprei": "14:38",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "14:50",
    "estado": "C",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 14.633333333333,
    "horafin_n": 14.816666666667,
    "horaprei_n": 14.633333333333,
    "horapref_n": 14.833333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "O",
    "tipotarea": "O",
    "cono": "A38"
  },
  {
    "id": "448767",
    "idor1": "285815",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062371",
    "sucursal": "5",
    "service": "0",
    "tarea": "99904",
    "fechaini": "2021-11-03",
    "horaini": "13:03",
    "fechafin": "2021-11-03",
    "horafin": "13:33",
    "tiempo": "0.50",
    "fecha_prev": "2021-11-03",
    "horaprei": "13:03",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "13:04",
    "estado": "C",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 13.05,
    "horafin_n": 13.55,
    "horaprei_n": 13.05,
    "horapref_n": 13.066666666667,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "O",
    "tipotarea": "O",
    "cono": "A11"
  },
  {
    "id": "447477",
    "idor1": "284722",
    "operario": "1",
    "tipo": " ",
    "nroorden": "80061713",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "09:40",
    "fechafin": "2021-11-03",
    "horafin": "13:06",
    "tiempo": "3.44",
    "fecha_prev": "2021-11-03",
    "horaprei": "09:40",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "13:06",
    "estado": "S",
    "nombre_op": "Juan Perez         ",
    "horaini_n": 9.6666666666667,
    "horafin_n": 13.1,
    "horaprei_n": 9.6666666666667,
    "horapref_n": 13.1,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A29"
  },
  {
    "id": "448587",
    "idor1": "285331",
    "operario": "1",
    "tipo": " ",
    "nroorden": "80062285",
    "sucursal": "5",
    "service": "0",
    "tarea": "99902",
    "fechaini": "2021-11-03",
    "horaini": "09:05",
    "fechafin": "2021-11-03",
    "horafin": "09:05",
    "tiempo": "0.01",
    "fecha_prev": "2021-11-03",
    "horaprei": "09:05",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "09:05",
    "estado": "S",
    "nombre_op": "Juan Perez         ",
    "horaini_n": 9.0833333333333,
    "horafin_n": 9.0833333333333,
    "horaprei_n": 9.0833333333333,
    "horapref_n": 9.0833333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A13"
  },
  {
    "id": "448691",
    "idor1": "285335",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062287",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "08:07",
    "fechafin": "2021-11-03",
    "horafin": "08:37",
    "tiempo": "0.52",
    "fecha_prev": "2021-11-03",
    "horaprei": "08:07",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "08:37",
    "estado": "S",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 8.1166666666667,
    "horafin_n": 8.6166666666667,
    "horaprei_n": 8.1166666666667,
    "horapref_n": 8.6166666666667,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "E",
    "tipotarea": "E",
    "cono": "A17"
  },
  {
    "id": "448705",
    "idor1": "284061",
    "operario": "1",
    "tipo": " ",
    "nroorden": "80061341",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "08:38",
    "fechafin": "2021-11-03",
    "horafin": "09:05",
    "tiempo": "0.46",
    "fecha_prev": "2021-11-03",
    "horaprei": "08:38",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "09:05",
    "estado": "S",
    "nombre_op": "Juan Perez         ",
    "horaini_n": 8.6333333333333,
    "horafin_n": 9.0833333333333,
    "horaprei_n": 8.6333333333333,
    "horapref_n": 9.0833333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A33"
  },
  {
    "id": "448721",
    "idor1": "285415",
    "operario": "123",
    "tipo": " ",
    "nroorden": "80062345",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "11:50",
    "fechafin": "2021-11-03",
    "horafin": "12:32",
    "tiempo": "0.72",
    "fecha_prev": "2021-11-03",
    "horaprei": "11:50",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "12:32",
    "estado": "S",
    "nombre_op": "Sebastian Mastropiero  ",
    "horaini_n": 11.833333333333,
    "horafin_n": 12.533333333333,
    "horaprei_n": 11.833333333333,
    "horapref_n": 12.533333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A01"
  },
  {
    "id": "448725",
    "idor1": "285771",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062386",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "13:33",
    "fechafin": "2021-11-03",
    "horafin": "13:47",
    "tiempo": "0.23",
    "fecha_prev": "2021-11-03",
    "horaprei": "13:33",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "13:47",
    "estado": "S",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 13.55,
    "horafin_n": 13.783333333333,
    "horaprei_n": 13.55,
    "horapref_n": 13.783333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A23"
  },
  {
    "id": "448728",
    "idor1": "284061",
    "operario": "1",
    "tipo": " ",
    "nroorden": "80061341",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "09:06",
    "fechafin": "2021-11-03",
    "horafin": "09:40",
    "tiempo": "0.58",
    "fecha_prev": "2021-11-03",
    "horaprei": "09:06",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "09:40",
    "estado": "S",
    "nombre_op": "Juan Perez         ",
    "horaini_n": 9.1,
    "horafin_n": 9.6666666666667,
    "horaprei_n": 9.1,
    "horapref_n": 9.6666666666667,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A33"
  },
  {
    "id": "448765",
    "idor1": "285815",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062371",
    "sucursal": "5",
    "service": "0",
    "tarea": "99904",
    "fechaini": "2021-11-03",
    "horaini": "12:03",
    "fechafin": "2021-11-03",
    "horafin": "12:32",
    "tiempo": "0.49",
    "fecha_prev": "2021-11-03",
    "horaprei": "12:03",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "12:32",
    "estado": "S",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 12.05,
    "horafin_n": 12.533333333333,
    "horaprei_n": 12.05,
    "horapref_n": 12.533333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "O",
    "tipotarea": "O",
    "cono": "A11"
  },
  {
    "id": "448766",
    "idor1": "285748",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062559",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "14:49",
    "fechafin": "2021-11-03",
    "horafin": "15:15",
    "tiempo": "0.45",
    "fecha_prev": "2021-11-03",
    "horaprei": "14:49",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "15:15",
    "estado": "S",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 14.816666666667,
    "horafin_n": 15.25,
    "horaprei_n": 14.816666666667,
    "horapref_n": 15.25,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "E",
    "tipotarea": "E",
    "cono": "A17"
  },
  {
    "id": "448768",
    "idor1": "285415",
    "operario": "123",
    "tipo": " ",
    "nroorden": "80062345",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "13:02",
    "fechafin": "2021-11-03",
    "horafin": "15:48",
    "tiempo": "2.77",
    "fecha_prev": "2021-11-03",
    "horaprei": "13:02",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "15:48",
    "estado": "S",
    "nombre_op": "Sebastian Mastropiero  ",
    "horaini_n": 13.033333333333,
    "horafin_n": 15.8,
    "horaprei_n": 13.033333333333,
    "horapref_n": 15.8,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A01"
  },
  {
    "id": "448780",
    "idor1": "285771",
    "operario": "5",
    "tipo": " ",
    "nroorden": "80062386",
    "sucursal": "5",
    "service": "0",
    "tarea": "99901",
    "fechaini": "2021-11-03",
    "horaini": "15:27",
    "fechafin": "2021-11-03",
    "horafin": "15:32",
    "tiempo": "0.10",
    "fecha_prev": "2021-11-03",
    "horaprei": "15:27",
    "durac_prev": null,
    "fecha_pref": "2021-11-03",
    "horapref": "15:32",
    "estado": "S",
    "nombre_op": "Pedro Garcia           ",
    "horaini_n": 15.45,
    "horafin_n": 15.533333333333,
    "horaprei_n": 15.45,
    "horapref_n": 15.533333333333,
    "fecha_actual": "2021-11-03",
    "hora_actual": "16:28:14",
    "hora_n_actual": "16.4667",
    "color_t": "Finalizada",
    "color_t2": "M",
    "tipotarea": "M",
    "cono": "A23"
  }
];










    //console.log(tareas);
    //console.log(operarios);

    //test();
    t = new Tablero("myCanvas");

    //t.UsarEjeSecundario3();
    //t.Linea(0,0,490,190);
    //t.UsarEjePrincipal();
    t.UsarEjeSecundario1();
    t.DibujarEjeXPositivo();
    t.DibujarHoras();
    t.DibujarEjeYPositivo();
  
    // dibujo las lineas grises de las horas. 
    t.ctx.strokeStyle='#cccccc'; 
    t.Linea(t.tflx(8.5  ), 0,t.tflx(8.5  ), t.eje.y[1] - t.eje.y[0]);
    for (var i = 0, l= 11; i < l; i ++) {
        t.Linea(t.tflx(9.0  + i), 0,t.tflx(9.0  + i ), t.eje.y[1] - t.eje.y[0]);
        t.Linea(t.tflx(9.5  + i), 0,t.tflx(9.5  + i ), t.eje.y[1] - t.eje.y[0]);
    }
    t.ctx.strokeStyle='#000000'; 
    
    //t.Linea(0,0,990,390);
    //t.Cuadrado(100,50 ,800 , 10) ;

    //t.DibujaTarea(8.0, 20.0, 150);     
    //t.DibujaTarea(14.0, 20.0, 100);     

    //Agrego los operarios al Tablero.
    for (var i = 0, l = operarios.length; i < l; i ++) {
        var v = operarios[i];
        var n = operariosnombres[i];
        t.AddOperario(v, n, 0);
    }
    //t.Linea(0,0,490,190);
    
    //t.AddOperario(1, 'Pepe', 0);
    //t.AddOperario(2, 'Juan', 0);



    //Agrego las tareas que tiene cada operario
    for (var i = 0, l = tareas.length; i < l; i ++) {
        var v = tareas[i];
        if (v.horafin_n == null){
            console.log( "HF ES NULL");
            console.log(v.id);
            // Si la hora fin es null y la fecha de inicio es hoy entonces ESTA TRABAJADO.
            // Pongo de hora fin el momento de ahora.

            if (v.fecha_actual == v.fechaini ) {
                //depende el estado de la tarea cambio la hora final
                console.log(v.estado);
                if (v.color_t=='NoIniciada'){
                    v.horafin_n= v.horapref_n;
                }
                if (v.color_t=='Iniciada'){
                    if (v.horafin_n<= v.hora_n_actual) {
                        v.horafin_n= v.hora_n_actual;
                    } else {
                        v.horafin_n= v.horapref_n;
                    }
                }
                console.log(`${v.color_t} hi: ${v.horaini_n} hf: ${v.horafin_n}` );
            }
        }
        t.AddTareaAOperario(v.operario, v.nroorden, v.horaini_n, v.horafin_n,0,0, v.color_t, v.horaprei_n, v.horapref_n, v.color_t2, v.cono);
    }

    //t.AddTareaAOperario(1, 8001, 9,12,0,0)
    //t.AddTareaAOperario(1, 8001, 14,15,0,0)
    //t.AddTareaAOperario(2, 8001, 10.5,12,0,0)
    //t.AddTareaAOperario(2, 8001, 15,19,0,0)
    
    t.DibujarTareas();

    //t.Texto("Hola",0,0);

});

function test() {
    //dibujalinea(0,0,1000,200); 
    for (var i = 0, l = 10; i < l; i ++) {
        dibujalinea(0,0,1000,200 + i*10); 
    }
    
    dibujalinea(-500,-200,500,200 ); 


    horas=[[9.0, 10.0],[11.5, 12.0],[14.25,14.5], [8,20]];

    for (var i = 0, l = horas.length; i < l; i ++) {
        var v = horas[i];
        console.log(v);
        tfl(v[0]);
        
        dibujalinea(tfl(v[0]), 0 + i*30, tfl(v[1]), 0+i*30 ); 

    }

}

function getCursorPosition(IdCanvas, event) {
    canvas= document.getElementById(IdCanvas);
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    
    t.DetectClick(x,y);

}

function Tablero(IdCanvas) {
    // ancho y alto es el ancho y el alto del canvas
    this.c = document.getElementById(IdCanvas);
    this.ctx = this.c.getContext("2d");
    this.debug=1;

    this.c.addEventListener('mousedown', function(e) {
        getCursorPosition(IdCanvas, e);
    })

    this.objEventos=[]; // guardo las coordenadas de los objetos que pueden recibir click.

    this.hora_inicio = 8;
    this.hora_fin =20;

    this.c.width=$(window).width() - 30; // se resta 30 porque el div container fluid tiene 15px de margen
    this.c.height=$(window).height()*0.75; // la altura la ponemos un 75% del total
    //this.c.width=document.body.clientWidth;
    //this.c.height=document.body.clientHeight;


    this.w = this.c.width;
    this.h = this.c.height;
    this.ejep = { x: [0, this.w], y:[0, this.h] };
    this.eje  = { x: [0, this.w], y:[0, this.h] };
    this.ejesec1 = { x: [150, this.w], y:[50, this.h] };
    this.ejesec2 = { x: [0, this.w], y:[0, this.h] };
    this.ejesec3 = { x: [500, 1000], y:[200, 400] };

    this.altotarea=50;
    this.separaciontareasy=20;

    this.fonthoras = "10px Monospace"
    this.fontmecanicos = "12px Monospace"
    this.fontconos = "bold 18px Monospace"
    this.fonthoraactual = "bold 14px Monospace"


    //this.aColorTareas = {Iniciada: "rgba(120, 120, 120, 0.5)", NoIniciada: "rgba(0, 0, 120, 0.5)", Finalizada: "rgba(0, 120, 0, 0.5)"};
    this.aColorTareas = {M: "rgba(171, 244, 187, 0.8)", E: "rgba(247, 210, 92, 0.8)", C: "rgba(85, 167, 211, 0.8)", S :"rgba(247,169,165, 0.8)", O : "rgba(150,150,150, 0.8)", X:"rgba(255,255,255,1)"};
    this.aColorTareasBordes = {Iniciada: "rgba(24, 178, 178, 0.8)", NoIniciada: "rgba(24, 24, 178, 0.8)", Finalizada: "rgba(178, 104, 24, 0.8)"};

    this.Operarios=[];

    //--------------------------------------------------------------------------------
    this.Linea = function(x1,y1,x2,y2) {
        this.ctx.moveTo(this.X(x1), this.Y(y1));
        this.ctx.lineTo(this.X(x2), this.Y(y2));
        this.ctx.stroke();

        if (this.debug) {
            console.log("Linea de: (" + x1 + ", " + y1 + ") a (" + x2 + ", " + y2 + ")");
        }
    };

    //--------------------------------------------------------------------------------
    this.LineaDotted = function(x1,y1,x2,y2) {
        this.ctx.setLineDash([14, 4])
        this.ctx.moveTo(this.X(x1), this.Y(y1));
        this.ctx.lineTo(this.X(x2), this.Y(y2));
        this.ctx.stroke();

        if (this.debug) {
            console.log("Linea de: (" + x1 + ", " + y1 + ") a (" + x2 + ", " + y2 + ")");
        }
    };
    //--------------------------------------------------------------------------------
    this.Cuadrado = function(x1,y1,ancho,alto) {
        //ojo que es ancho y alto y no x2, y2. 
        //Otro detalle canvas siempre dibuja el alto hacia abajo, yo aca cambio el comportamiento.
        
        //this.ctx.fillStyle="rgba(0,0,200,.5)";

        this.ctx.lineWidth = 5;

        this.ctx.fillRect(this.X(x1), this.Y(y1 - alto), ancho, alto);
        this.ctx.strokeRect(this.X(x1), this.Y(y1 - alto), ancho, alto);

        if (this.debug) {
            console.log("Rect de: (" + this.X(x1) + ", " + this.Y(y1 - alto) + ") y ancho: " + ancho + ", alto: " + alto );
        }
    };
    


    //--------------------------------------------------------------------------------
    this.UsarEjePrincipal = function () {
        this.eje = this.ejep;
    }
    //--------------------------------------------------------------------------------
    this.UsarEjeSecundario1 = function () {
        this.eje = this.ejesec1;
    }
    //--------------------------------------------------------------------------------
    this.UsarEjeSecundario2 = function () {
        this.eje = this.ejesec2;
    }
    //--------------------------------------------------------------------------------
    this.UsarEjeSecundario3 = function () {
        this.eje = this.ejesec3;
    }
    
    //--------------------------------------------------------------------------------
    this.SetEjeSecundario1 = function (xi,xf, yi, yf) {
        this.ejesec1.x[0] = xi;
        this.ejesec1.x[1] = xf;
        this.ejesec1.y[0] = yi;
        this.ejesec1.y[1] = yf;
    }
    
    //--------------------------------------------------------------------------------
    this.SetEjeSecundario2 = function (xi,xf, yi, yf) {
        this.ejesec2.x[0] = xi;
        this.ejesec2.x[1] = xf;
        this.ejesec2.y[0] = yi;
        this.ejesec2.y[1] = yf;
    }
    
    //--------------------------------------------------------------------------------
    this.SetEjeSecundario3 = function (xi,xf, yi, yf) {
        this.ejesec3.x[0] = xi;
        this.ejesec3.x[1] = xf;
        this.ejesec3.y[0] = yi;
        this.ejesec3.y[1] = yf;
    }

    //--------------------------------------------------------------------------------
    this.X = function (x) {
        xi=this.eje.x[0];
        xf=this.eje.x[1];
        rta= x + xi;
        //console.log(rta)
        return rta;
    }

    //--------------------------------------------------------------------------------
    this.Y = function (y) {
        yi=this.eje.y[0];
        yf=this.eje.y[1];
        rta=yf-y - yi;
        //console.log(rta);
        return rta;
    }

    //--------------------------------------------------------------------------------
    this.tflx = function (x) {
        // Se fija los valores de eje x usado en el momento
        // y hace una transformacion lineal usando a y b. tflx = a*x +b
        // a y b se calculan usando hora inicio y hora fin.
        //hora_inicio y hora_fin deben ser integer de 0 a 24.
        // x en este caso seria en horas tipo float, o sea 8.5 serian las 08:30 y representa la hora que luego se
        // dibuja en el tablero.
        pix1=0; 
        pix2=this.eje.x[1] - this.eje.x[0];
        h1 = this.hora_inicio;
        h2 = this.hora_fin;
        a  = (pix2-pix1)/(h2-h1)
        b  = pix1 - h1 * a
        rta= x* a + b;
        //console.log(pix1)
        //console.log(pix2)
        //console.log(h1)
        //console.log(h2)
        //console.log(a)
        //console.log(b)
        //console.log(rta)
        //console.log('-----------------------')
        return rta;
    }
    
    //--------------------------------------------------------------------------------
    this.DibujaTarea = function (horaini, horafin, y, colorTareaBorde, colorTarea, cono ) {
            
        //console.log("HORAINI");
        //console.log(horaini);
        //console.log(horafin);
        //console.log(colorTarea);
        //console.log(this.aColorTareas[colorTarea]);
        //console.log(colorTareaBorde);
        
        
        this.ctx.fillStyle=this.aColorTareas[colorTarea];
        this.ctx.strokeStyle = this.aColorTareasBordes[colorTareaBorde];
        //if (typeof(horaini)=="string") {
            
        //}
        x1 = this.tflx(horaini);
        x2 = this.tflx(horafin);
        
        this.Cuadrado(x1, y, x2-x1, this.altotarea)


        mx=this.tflx(horaini) + (this.tflx(horafin)  - this.tflx(horaini))/2;
        my = y - this.altotarea*1.5
        
        this.drawCircle(this.X(mx)+5, this.Y(my)-2, 22, "rgba(255,255,255,0.3)", "#000000", 2);
    

        this.ctx.font=this.fontconos;
        this.Texto(cono, mx-10, my-4);
        this.ctx.font=this.fontmecanicos;

    }

    //--------------------------------------------------------------------------------
    this.AddOperario = function (operar, nombre, estado) {
        this.Operarios.push({operar: operar, nombre: nombre, estado:estado, tareas: []}); 
        if (this.debug) {
            console.log("Agrego un operario al tablero: " + operar.toString());
        }
    }
    //--------------------------------------------------------------------------------
    this.ClearOperarios = function () {
        this.Operarios = [];
        if (this.debug) {
            console.log(this.Operarios);
        }
    }

    //--------------------------------------------------------------------------------
    this.AddTareaAOperario = function (operar,nroorden, horaini, horafin, tipo, estado, color_t, horaprei, horapref, color_t2, cono) {
        //if (this.debug) {
            //console.log("Intento agregar tarea desde " + horaini.toString() + " a " + horafin.toString() + "al operario " + operar.toString());
        //}
        
        for (var i = 0, l = this.Operarios.length; i < l; i ++) {
            var v = this.Operarios[i];
            if (v.operar == operar) {

//              if (estado=='NoIniciada') {
                                    
                //}

                v.tareas.push({nroorden: nroorden, horaini: horaini, horafin:horafin, tipo:tipo, estado:estado, color_t: color_t, color_t2: color_t2, cono:cono});
                if (this.debug) {
                    cStr="Tarea agregada al operario "  + operar.toString() + ". [horaini, horafin, horaprei, horapref, estado] = [";
                    cStr=cStr +  horaini.toString() + ", " + horafin.toString() + ", " + horaprei.toString() + ", " + horapref.toString();
                    cStr=cStr +  ", " + color_t + ", " + color_t2 + ", cono: " + cono + "]";
                    console.log(cStr);
                }
                break; 
            }
        }  
    }
    
    //--------------------------------------------------------------------------------
    this.AddObjEventos =function (x1,y1,x2,y2,cstr, nid) {
        this.objEventos.push ({x1: x1, y1:y1, x2:x2, y2:y2, texto: cstr, id: nid});

        cTxt = "Texto: " + cstr + ". Id: " + nid.toString();
        console.log("Agregado Obj para eventos en (" + x1.toString() + ', ' + y1.toString() + ") ("+ x2.toString()+ ", "+ y2.toString()+") " + cTxt); 
    }

    //--------------------------------------------------------------------------------
    this.DetectClick= function(x1,y1) {
        //Detecta si el lugar donde clickea el usuario pertenece a algun objeto dibujado del tablero.

        console.log("ENTRACLICK " + x1.toString() + "-" + y1.toString());
        for (var i = 0, l = this.objEventos.length; i < l; i ++) {
            var v = this.objEventos[i];
            //console.log(y1);
            //console.log(v.y1);
            //console.log(v.y2);
            if (x1>= v.x1 && x1<=v.x2) {
                if (y1>=v.y2 && y1<=v.y1) {
                    console.log("CLICK " + v.texto);
                }
            }
        }
    }

    //--------------------------------------------------------------------------------
    this.DibujarTareas = function () {
        // Voy a tratar de dinamicamente asignar el alto de las tareas.
        this.altotarea= (this.c.height - (this.Operarios.length * this.separaciontareasy) - this.separaciontareasy - 25) / this.Operarios.length; 

        y=this.altotarea *2;
        for (var i = 0, l =this.Operarios.length; i < l; i ++) {
            var v = this.Operarios[i];
            var xx=0 - 143;
            var yy=y - this.altotarea *1.5 - 5;
            this.Texto(v.operar.toString() + " "+v.nombre.substr(0,14), xx , yy);
            this.AddObjEventos(this.X(xx), this.Y(yy), this.X(xx+130), this.Y(yy + 13), v.nombre.trim(), v.operar);

            var cStr="";
            for (var j = 0, ll = v.tareas.length; j < ll; j ++) {
                var t = v.tareas[j];
                this.DibujaTarea(t.horaini, t.horafin, y, t.color_t, t.color_t2, t.cono);
                //alert("Tarea desde " + t.horaini.toString() + " a " + t.horafin.toString() )
                cStr = "Tarea estado " + t.color_t + ". horaini: " + t.horaini + " horafin: " + t.horafin + " color t2:" + t.color_t2;
                console.log(cStr); 
            }
            y=y+this.altotarea+ this.separaciontareasy;
        }

        this.DibujarHoraActual();

    }
    
    //--------------------------------------------------------------------------------
    this.DibujarHoras = function () {
        this.ctx.font=this.fonthoras;
        hrsval = [9, 10, 11, 12, 13, 14, 15, 16, 17 ,18, 19];
        hrstxt = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00" , "18:00", "19:00"];
        for (var i = 0, l = hrsval.length; i < l; i ++) {
            this.Texto(hrstxt[i], this.tflx(hrsval[i]), -15);
        }
        this.ctx.font=this.fontmecanicos;
    }

    //--------------------------------------------------------------------------------
    this.Texto = function (texto,x,y, color) {
        //this.ctx.font="12px Monospace";
        this.ctx.fillStyle="#000000";
        if(color) {
            this.ctx.fillStyle=color;
        }
        this.ctx.fillText(texto, this.X(x), this.Y(y));
        // body...
    }
    //this.DistribuyeOperariosEnEjeY = function () {
        //cant = this.Operarios.length;
    //}
    
    //--------------------------------------------------------------------------------
    this.DibujarEjeXPositivo = function () {
        this.Linea(0,0,this.eje.x[1] - this.eje.x[0],0);
    }
    
    //--------------------------------------------------------------------------------
    this.DibujarEjeYPositivo = function () {
        this.Linea(0,0 , 0, this.eje.y[1] - this.eje.y[0] );
    }


    //--------------------------------------------------------------------------------
    this.drawCircle = function(x, y, radius, fill, stroke, strokeWidth) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2* Math.PI, false);
        if (fill) {
            this.ctx.fillStyle = fill;
            this.ctx.fill();
        }
        if (stroke) {
            this.ctx.lineWidth = strokeWidth;
            this.ctx.strokeStyle = stroke;
            this.ctx.stroke();
        }
    }

    //--------------------------------------------------------------------------------
    this.DibujarHoraActual = function () {
        this.ctx.strokeStyle = "rgba(0,0,250,0.7)";
        this.ctx.lineWidth = 3;

        ha = new Date();
        h=ha.getHours();
        mi=ha.getMinutes();
        m=mi/60;

        this.LineaDotted(this.tflx(h+m),-20 , this.tflx(h+m), this.eje.y[1] - this.eje.y[0] );
        
        this.ctx.fillStyle="#0000FF";
        mx=this.tflx(h+m) - 4;
        my=-32;
        this.ctx.font=this.fonthoraactual;
        this.Texto(`^ ${h}:${mi}`, mx, my,'#0000ff');
        this.ctx.font=this.fontmecanicos;
        //this.ctx.fillText("eerereee:", this.tflx(h+m), -25);

    }



}

