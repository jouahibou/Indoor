import axios from "axios";
import React, { useEffect, useState } from "react"

const baseUrl = "http://localhost:9000/api"

export default function Trilateration() {

    var distance = null
    var b = null
    var tablist = []
    var tab = []
    var position1, position2, position3

    useEffect(() => {
        axios.get(`${baseUrl}/beacon`)
            .then((response) => response.json()
                .then(response => {
                    axios.get(`${baseUrl}/beacon`)
                        .then((respons) => respons.json())
                        .then(respons => {
                            for (var i = 0; i < response.length; i++) {
                                b = response[i].data
                                for (var j = 0; j < respons.length; j++) {
                                    if (response[j].data.rasberryId == b.rasberryId) {
                                        distance = b.rssi
                                        tablist.push(distance)
                                    }
                                }
                            }

                        })

                }))
        axios.get(`${baseUrl}/raspberry`)
            .then((response) => response.json()
                .then(response => {
                    for (var m = 0; m < response.length; m++) {
                        tab.push(response[m].data)
                    }
                }))
    })

    position1 = tab[0]
    position2 = tab[1]
    position3 = tab[2]

    function getTrilateration(position1, position2, position3) {
        var xa = position1.x;
        var ya = position1.y;
        var xb = position2.x;
        var yb = position2.y;
        var xc = position3.x;
        var yc = position3.y;
        var ra = position1.distance;
        var rb = position2.distance;
        var rc = position3.distance;

        var S = (Math.pow(xc, 2.) - Math.pow(xb, 2.) + Math.pow(yc, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(rc, 2.)) / 2.0;
        var T = (Math.pow(xa, 2.) - Math.pow(xb, 2.) + Math.pow(ya, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(ra, 2.)) / 2.0;
        var y = ((T * (xb - xc)) - (S * (xb - xa))) / (((ya - yb) * (xb - xc)) - ((yc - yb) * (xb - xa)));
        var x = ((y * (ya - yb)) - T) / (xb - xa);

        return {
            x: x,
            y: y
        };
    }
}