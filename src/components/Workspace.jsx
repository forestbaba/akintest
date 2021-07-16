import React, { useState, useEffect } from 'react';
import Histogram from 'react-chart-histogram';
import Datepicker from './datepicker';
import axios from 'axios';
import HSBar from "react-horizontal-stacked-bar-chart";
import { Bar } from 'react-chartjs-2';


const Workspace = () => {
    const [res, setRes] = useState([])
    const [current, setCurrent] = useState([])

    const data2 = [
        { title: "On track", tag: "22.2% in the past 30 days", tagtype: "ontrack" },
        { title: "Behind", tag: "12.25% in the past 30 days", tagtype: "behind" },
        { title: "At risk", tag: "22.2% in the past 30 days", tagtype: "atrisk" }
    ]

    useEffect(() => {
        axios.get('https://api.jikan.moe/v3/anime/1/characters_staff')
            .then(response => {
                setRes(response.data.characters)
                setCurrent()
            }).catch(err => {
                console.log("ERR: ", err)
            })
    }, [])

    const arbitraryStackKey1 = "stack1";
    const arbitraryStackKey2 = "stack2`";
    const arbitraryStackKey3 = "stack3`";
    const arbitraryStackKey4 = "stack4`";
    const arbitraryStackKey5 = "stack5`";

    const optionsx = {
        scales: {
            // xAxes: [{
            //     stacked: true,

            // }],
            yAxes: [{
                stacked: true,
                // ticks: {
                //     beginAtZero: true,
                // },
            }]
        }
    }

    let datax = {
        labels: ['1', '2', '3', '4', '5', '6'],

        datasets: [
            {
                stack: arbitraryStackKey1,
                label: '# of Red Votes',
                backgroundColor: '#f39c9a',
                data: [30],
            },
            
            {
                stack: arbitraryStackKey1,

                label: '# of Green Votes',
                data: [60],
                backgroundColor: '#ffe3c8',
            },
            {
                stack: arbitraryStackKey1,

                label: '# of Green Votes',
                data: [30],
                backgroundColor: '#d3eee3',
            },

            
            {
                stack: arbitraryStackKey2,
                label: '# of Red Votes',
                backgroundColor: '#f39c9a',
                data: [70],
            },
            
            {
                stack: arbitraryStackKey2,

                label: '# of Green Votes',
                data: [40],
                backgroundColor: '#ffe3c8',
            },
            {
                stack: arbitraryStackKey2,

                label: '# of Green Votes',
                data: [50],
                backgroundColor: '#d3eee3',
            },
            {
                stack: arbitraryStackKey3,
                label: '# of Red Votes',
                backgroundColor: '#f39c9a',
                data: [70],
            },
            
            {
                stack: arbitraryStackKey3,

                label: '# of Green Votes',
                data: [40],
                backgroundColor: '#ffe3c8',
            },
            {
                stack: arbitraryStackKey3,

                label: '# of Green Votes',
                data: [50],
                backgroundColor: '#d3eee3',
            },
            {
                stack: arbitraryStackKey4,
                label: '# of Red Votes',
                backgroundColor: '#f39c9a',
                data: [70],
            },
            
            {
                stack: arbitraryStackKey4,

                label: '# of Green Votes',
                data: [40],
                backgroundColor: '#ffe3c8',
            },
            {
                stack: arbitraryStackKey4,

                label: '# of Green Votes',
                data: [50],
                backgroundColor: '#d3eee3',
            },

            
        ],

        labels: ['label']
    }
    return (
        <div className="workspace">
            <h4 className="purpose">Your Workspace</h4>
            <div className="options">
                <p>People</p>
                <p>Workspace Settings</p>
                <p className="active">Reporting</p>
            </div>
            <div className="content">
                <div className="content-1">
                    <div className="goal-title">
                        <p>Goals</p>
                        <img src='/arrow-right.png' alt="img" />
                    </div>

                </div>
                <div className="content-2">
                    <div className="sub-child">
                        <div className="filter-collapse">
                            <p>Filter</p>
                            <p>Collapse</p>
                        </div>
                        <div className="sub-child-2">
                            <div className="search-holder">
                                <input placeholder="search by people, group or Manager" />
                                <div className="pen">
                                    <img src="/glass.png" />
                                </div>

                            </div>

                            <div className="goal-holder">
                                <select>
                                    {
                                        res.map((item, index) => {
                                            return <option key={item.mal_id}>{item.name}</option>
                                        })
                                    }

                                </select>

                                <Datepicker />
                                <Datepicker />
                            </div>
                        </div>
                    </div>
                    <div className="sub-child-3">
                        <div className="filter-collapse">
                            <p>Goal Status</p>
                        </div>
                        <div className="sub-child-1">
                            <div className="c1">
                                {/* <Histogram xLabels={labels} yValues={data} width="300" height="400" options={options} /> */}
                                <Bar data={datax} options={optionsx} height={300}  width={500}/>
                            </div>
                            <div className="c2">
                                <div className="title-holder">
                                    <p> Status</p>
                                    <p>
                                        Metric as at <b>June 31st</b>
                                    </p>
                                </div>

                                {
                                    data2.map((item, index) => {
                                        return <div className={index === 0 ? "member-container-1" : "member-container"} key={index} >

                                            <div className="first-child">
                                                <h1 class={item.tagtype}></h1>
                                                <p>{item.title}</p>
                                            </div>
                                            <div className="second-child">
                                                <div className="second-child-sub1">
                                                    <div className="rap">
                                                        <h1>44</h1>
                                                        <p>(7%)</p>
                                                    </div>
                                                    <div className="row">
                                                        <img src='/properdown.png' alt="img" />
                                                        <a href="#" className="status">22% in the past 30 days</a>
                                                    </div>
                                                </div>
                                                <p className="view">View</p>
                                            </div>
                                        </div>


                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Workspace;
