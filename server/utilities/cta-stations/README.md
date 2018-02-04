# CTA JSON File

Because information for CTA stations changes so rarely,
and because the format of the data is a little odd for line information,
I'm reformatting it once in a blue moon using `cleanup_raw_station_data.js`. The raw data is
downloaded from the truly incredible resource that is the
[City of Chicago Data Portal](https://data.cityofchicago.org/Transportation/CTA-System-Information-List-of-L-Stops/8pix-ypme).

Original Format:
```
{
    :@computed_region_43wa_7qmu: "26"
    :@computed_region_6mkv_f3dw: "14920"
    :@computed_region_awaf_s7ux: "8"
    :@computed_region_bdys_3d7i: "343"
    :@computed_region_vrxf_vc4k: "33"
    ada: true
    blue: false
    brn: false
    direction_id: "W"
    g: false
    location: Object
    map_id: "40830"
    o: false
    p: false
    pexp: false
    pnk: true
    red: false
    station_descriptive_name: "18th (Pink Line)"
    station_name: "18th"
    stop_id: "30162"
    stop_name: "18th (54th/Cermak-bound)"
    y: false
}
```