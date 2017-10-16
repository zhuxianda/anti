import React, {Component} from 'react';
import {Table, Button, DatePicker} from 'antd';
import ReactEcharts from 'echarts-for-react';
import { Spin } from 'antd';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import { Input } from 'antd';
import { Menu, Dropdown, Icon, message } from 'antd';
import { Select } from 'antd';
import { Tabs } from 'antd';
import moment from 'moment';
import reqwest from 'reqwest';


import './App.css';

class AdDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: null,
        }


    }

    componentWillMount() {

        let option = {
/*            title: {
                text: ''
            },*/
            tooltip: {
                trigger: 'axis'
            },
/*            legend: {
                data: ['邮件营销', '联盟广告', '视频广告']
            },*/
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    /*data: ['2017-09-14', '2017-09-14', '2017-09-14', '2017-09-14', '2017-09-14', '2017-09-14', '2017-09-14'],*/
                    data: ['00:00-00:59', '01:00-01:59', '02:00-02:59', '03:00-03:59', '04:00-04:59', '05:00-05:59', '06:00-06:59','07:00-07:59',
                        '08:00-08:59', '09:00-09:59', '10:00-10:59', '11:00-11:59', '12:00-12:59', '13:00-13:59','14:00-14:59',
                        '15:00-15:59', '16:00-16:59', '17:00-17:59', '18:00-18:59', '19:00-19:59', '20:00-20:59', '21:00-21:59','22:00-22:59','23:00-23:59']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '均价',
                    type: 'line',
                    //stack: '总量',
                    areaStyle: {normal: {}},
                    data: [1.11, 0.5, 1.01, 1.34, 0.90, 2.30, 2.10,1.1,2,1,
                        1.11, 0.5, 1.01, 1.34, 0.90, 2.30, 2.10,1.1,2,1.1,
                        1.11, 0.5, 1.01, 1.34, 0.90, 2.30, 2.10,1.1,2,1.3],
                    /*data: [1.11, 0.5, 1.01, 1.34, 0.90, 2.30, 2.10,1.7]*/
                },
/*                {
                    name: '联盟广告',
                    type: 'line',
                    //stack: '总量',
                    areaStyle: {normal: {}},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    //stack: '总量',
                    areaStyle: {normal: {}},
                    data: [150, 232, 201, 154, 190, 330, 410]
                }*/
            ]
        }

        this.setState(prevState => {

            return {
                option: option,
            }
        })
    }

    componentWillReceiveProps() {
        console.log(this.props,"属性被更新");
        // this.setState(prevState => {
        //     return {
        //         option: option,
        //     }
        // })
    }

    handleTableSelectClick(e) {
        console.log(e,'1111');

        if(e == '1') {
            this.setState(prevState => {
                const option = prevState.option;
                const newName = new Date().toLocaleString();
                const newSeries = {
                    name: e,
                    type: 'line',
                    data: [1.11, 0.5, 1.01, 1.34, 0.90, 2.30, 2.10,1.7],
                   /* data: Array(7).fill(0).map(x => Math.random() * 500 | 0)*/
                };
                const newxAxisInfo = {
                    ...prevState.option.xAxis[0],
                    data:['2017-09-14', '2017-09-14', '2017-09-14', '2017-09-14', '2017-09-14', '2017-09-14', '2017-09-14'],

                }
                return {
                    option: {
                        ...option,
                        series: newSeries,
                        xAxis: [newxAxisInfo],
                        //legend: {data: [...option.legend.data, newName]},
                        //areaStyle: {normal: {}}
                    }
                };
            })
        }
    }
    /*        this.setState(prevState => {
            const option = prevState.option;
            const newName = new Date().toLocaleString();
            const newSeries = {
                name: newName,
                type: 'line',
                data: Array(7).fill(0).map(x => Math.random() * 500 | 0)
            };
            return {
                option: {...option, series: [...option.series, newSeries],legend:{data:[...option.legend.data,newName]},areaStyle: {normal: {}}}
            }
        })*/

        //

    render() {
        const option = this.state.option;
        const Option = Select.Option;

        if(!option) {
            return (
                <div className="example">
                    <Spin />
                </div>
            )
        }

        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Row className="ColInfo">
                            <Col span={22} ><h2>广告详情:</h2></Col>
                        </Row>
                        <Row className="ColInfo">
                            <Col span={2} >当前花费:</Col>
                            <Col span={22}>123.00</Col>
                        </Row>
                        <Row className="ColInfo">
                            <Col span={2}>投放时间:</Col>
                            <Col span={22}>2017.08.10-2017.08.21</Col>
                        </Row>
                        <Row className="ColInfo">
                            <Col span={2}/><Col span={22}>周一 10:00--17:00 18:00-20:00</Col>
                            <Col span={2}/><Col span={22}>周二 10:00--17:00 18:00-20:00</Col>
                            <Col span={2}/><Col span={22}>周三 10:00--17:00 18:00-20:00</Col>
                            <Col span={2}/><Col span={22}>周四 10:00--17:00 18:00-20:00</Col>
                            <Col span={2}/><Col span={22}>周五 10:00--17:00 18:00-20:00</Col>
                            <Col span={2}/><Col span={22}>周六 10:00--17:00 18:00-20:00</Col>
                            <Col span={2}/><Col span={22}>周天 10:00--17:00 18:00-20:00</Col>
                        </Row>
                        <Row className="ColInfo">
                            <Col span={2}>关键词:</Col>
                            <Col span={22}>[精确匹配] 卡卡跑订车,卡卡跑订车,卡卡跑订车,卡卡跑订车,卡卡跑订车,卡卡跑订车,卡卡跑订车,
                            ,卡卡跑订车,卡卡跑订车,卡卡跑订车,卡卡跑订车,卡卡跑订车,卡卡跑订车</Col>
                        </Row>
                        <Row className="ColInfo">
                            <Col span={2}>匹配模式:</Col>
                            <Col span={22}>不限</Col>
                        </Row>

                    </Col>
                    <Col span={12} >
                        <div style={{'margin-bottom': '10px','margin-top': '10px','marginLeft': '10px',}}>
{/*                            <Button onClick={e => this.handleClick(e)}>花费</Button>*/}
                            <Select defaultValue="0" style={{ width: 120 }} onChange={e => this.handleTableSelectClick(e)} >
                                <Option value="0">花费</Option>
                                <Option value="1">均价</Option>
                                <Option value="2">出价</Option>
                                <Option value="3">ecpm</Option>
                                <Option value="4">下载率</Option>
                                <Option value="5">自然下载率</Option>
                                <Option value="6">展示量</Option>
                                <Option value="7">自然展示量</Option>
                                <Option value="8">下载量</Option>
                                <Option value="9">投放排名</Option>
                                <Option value="10">自然排名</Option>
                            </Select>
                        </div>

                        <div>
                            <ReactEcharts
                                option={option}
                                style={{height: '300px', width: '100%'}}
                                className='react_for_echarts'/>
                        </div>
                    </Col>
                </Row>


            </div>
        );
    }
}


class PickerData extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                option: null,
                selected:'1',
                start:this.GetDateStr(0),
                end:this.GetDateStr(0),
            }

        }

/*        state = {
            size: 'default',
        };*/

        GetDateStr = (AddDayCount) => {

            var dd = new Date();
            dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1;//获取当前月份的日期
            var d = dd.getDate();

            return y + "-" + m + "-" + d;
        }

/*        setDataState(start,end) {
            this.setState(() => {
                return {selected:'2',start:this.GetDateStr(-1),end:this.GetDateStr(-1)};
            }


            });
        }*/

        handleSizeChange = (e) => {
            //this.setState({ size: e.target.value });
            const value = e.target.value;
            let start = '';
            let end = '';
            console.log(value);
            if(value == 1) {
                //console.log(this.GetDateStr(0),this.GetDateStr(0));
                start = this.GetDateStr(0);
                end = this.GetDateStr(0);
                this.setState({selected:'1',start:start,end:end});
            } else if(value == 2) {
                //console.log(this.GetDateStr(-1),this.GetDateStr(-1));
                start = this.GetDateStr(-1);
                end = this.GetDateStr(-1);
                //this.setState({selected:'2',start:this.GetDateStr(-1),end:this.GetDateStr(-1)});
            } else if(value == 3) {
                //console.log(this.GetDateStr(0),this.GetDateStr(-7));
                //this.setState({selected:'3',start:this.GetDateStr(-7),end:this.GetDateStr(0)});
                start = this.GetDateStr(-7);
                end = this.GetDateStr(0);
            } else if(value == 4) {
                start = this.GetDateStr(-30);
                end = this.GetDateStr(0);
                //console.log(this.GetDateStr(0),this.GetDateStr(-30));
                //this.setState({selected:'4',start:this.GetDateStr(-30),end:this.GetDateStr(0)});
            }

            this.setState({selected:value+'',start:start,end:end});

            //console.log(this.state);

            this.props.getSearchTime(start,end);

        }

        dateChange = (monent,dataString) => {
            console.log(monent,dataString);
            this.setState(() => {
                this.props.getSearchTime(dataString[0],dataString[1]);
                return {
                    start:dataString[0],
                        end:dataString[1],
                    selected:0,
                }
            });


        }



        render() {
            const { MonthPicker, RangePicker } = DatePicker;
            const { selected } = this.state;
            const dateFormat = 'YYYY-MM-DD';
            return (
                <div>
                    <Radio.Group value={selected} onChange={this.handleSizeChange}>
                        <Radio.Button value="1">今天</Radio.Button>
                        <Radio.Button value="2">昨天</Radio.Button>
                        <Radio.Button value="3">最近7天</Radio.Button>
                        <Radio.Button value="4">最近30天</Radio.Button>
                    </Radio.Group>
                    <RangePicker size="default" defaultValue={[moment(this.state.start, dateFormat), moment(this.state.end, dateFormat)]}
                                 format="YYYY-MM-DD" onChange={(monent,dataString) => this.dateChange(monent,dataString)}
                                 value={[moment(this.state.start, dateFormat), moment(this.state.end, dateFormat)]}
                    />
                </div>
            );
        }
    }


class App extends Component {

    constructor(props) {

        super(props);

        const columns = [
            {title: <div style={{'textAlign': 'center'}}>广告名</div>, dataIndex: 'planname', key: 'planname',width:190},
            {title: <div style={{'textAlign': 'center'}}>游戏信息</div>, dataIndex: 'gpic', key: 'gpic',width:200,render: (gpic,record) => {
                return (
                    <div style={{display: 'flex','flexDirection': 'row','alignItems':'center','justifyContent': 'center',}}>
                        <img src={gpic} height="40" width="40" />
                        <div style={{'marginLeft': '10px'}}>{record.gname}<br></br>{record.notes}</div>
                    </div>
                );
            }},
            {title: <div style={{'textAlign': 'center'}}>花费<br></br>(现金+虚拟)</div>, dataIndex: 'money', key: 'money',width:130,
                render: (money,record) => {
                return (
                    <div style={{display: 'flex','flexDirection': 'row','alignItems':'center','justifyContent': 'center',}}>
                        <div style={{'marginLeft': '10px','textAlign': 'center'}}>{money}<br></br>({record.truemoney}+{record.virtualmoney})</div>
                    </div>
                );}
            },
            {title: <div style={{'textAlign': 'center'}}>下载均价<br></br>出价</div>, dataIndex: 'avgmoney', key: 'avgmoney',width:150,
                render: (avgmoney,record) => {
                    return (
                        <div style={{display: 'flex','flexDirection': 'row','alignItems':'center','justifyContent': 'center',}}>
                            <div style={{'marginLeft': '10px','textAlign': 'center'}}>{avgmoney}<br></br>({record.bid})</div>
                        </div>
                    );}
            },
            {title: <div style={{'textAlign': 'center'}}>ECPM</div>, dataIndex: 'ecpm', key: 'ecpm',width:130,
                render: (budTypeName,record) => {
                    return (
                        <div style={{display: 'flex','flexDirection': 'row','alignItems':'center','justifyContent': 'center',}}>
                            <div style={{'marginLeft': '10px','textAlign': 'center'}}>{budTypeName}</div>
                        </div>
                    );}
            },
            {title: <div style={{'textAlign': 'center'}}>下载率%<br></br>自然下载率%</div>, dataIndex: 'clickrate', key: 'clickrate',width:150,
                render: (clickrate,record) => {
                    return (
                        <div style={{display: 'flex','flexDirection': 'row','alignItems':'center','justifyContent': 'center',}}>
                            <div style={{'marginLeft': '10px','textAlign': 'center'}}>{clickrate}<br></br>({record.naturalClickRadio})</div>
                        </div>
                    );}},
            {title: <div style={{'textAlign': 'center'}}>展示量<br></br>自然展示量</div>, dataIndex: 'displaycount', key: 'displaycount',width:150,
                render: (clickrate,record) => {
                    return (
                        <div style={{display: 'flex','flexDirection': 'row','alignItems':'center','justifyContent': 'center',}}>
                            <div style={{'marginLeft': '10px','textAlign': 'center'}}>{clickrate}<br></br>({record.naturalClickRadio})</div>
                        </div>
                    );}
            },
            {title: <div style={{'textAlign': 'center'}}>下载量<br></br>自然下载量</div>, dataIndex: 'clickcount', key: 'clickcount',width:130,
                render: (clickcount,record) => {
                    return (
                        <div style={{display: 'flex','flexDirection': 'row','alignItems':'center','justifyContent': 'center',}}>
                            <div style={{'marginLeft': '10px','textAlign': 'center'}}>{clickcount}<br></br>({record.naturalDisplayAmount})</div>
                        </div>
                    );}
            },
            {title: <div style={{'textAlign': 'center'}}>投放排名<br></br>自然排名</div>, dataIndex: 'avgpos', key: 'avgpos',width:130,
                render: (avgpos,record) => {
                    return (
                        <div style={{display: 'flex','flexDirection': 'row','alignItems':'center','justifyContent': 'center',}}>
                            <div style={{'marginLeft': '10px','textAlign': 'center'}}>{avgpos}<br></br>({record.naturalAvgPos})</div>
                        </div>
                    );}
            },
            {title: <div style={{'textAlign': 'center'}}>首屏</div>, dataIndex: 'isFirstScreen', key: 'isFirstScreen',width:120,
                render: (isFirstScreen) => {
                    let display = "不限";
                    if(isFirstScreen == 1)
                        display = '首屏';
                    return (
                        <div style={{display: 'flex','flexDirection': 'row','alignItems':'center','justifyContent': 'center',}}>
                            <div style={{'marginLeft': '10px','textAlign': 'center'}}>{display}</div>
                        </div>
                    );}
            },
            {title: <div style={{'textAlign': 'center'}}>状态</div>, dataIndex: 'stateName', key: 'stateName',width:140,
                render: (stateName,record) => {
                    return (
                        <div style={{display: 'flex','flexDirection': 'row','alignItems':'center','justifyContent': 'center',}}>
                            <div style={{'marginLeft': '10px','textAlign': 'center'}}>{stateName}</div>
                        </div>
                    );}
            },
            {title: <div style={{'textAlign': 'center'}}>限额(元)</div>, dataIndex: 'budTypeName', key: 'budTypeName',
                render: (budTypeName,record) => {
                    return (
                        <div style={{display: 'flex','flexDirection': 'row','alignItems':'center','justifyContent': 'center',}}>
                            <div style={{'marginLeft': '10px','textAlign': 'center'}}>{budTypeName}</div>
                        </div>
                    );}
            },
        ];

        const data = [];
        data.push(
            {
            planid: 0,
            gname: '总计',
            age: 32,
            address: 'New York No. 1 Lake Park',
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
            rlCost:1,
            vlCost:1,
        });

        for (var i=1;i<35;i++) {
            var recode = {
                planid: i,
                gname: '时空召唤(新英雄月神)',
                gpic: "http://f1.img4399.com/sj~88665_logo_592400691db53.jpg",
                username: "4399yyceshi",
                planname:"时空召唤(新英雄月神)广告名",
                notes: "网游-黄晓彬",
                money: "4682.07",
                virtualmoney: "4682.07",
                truemoney: "0.00",
                avgmoney: "0.50",
                bid: "0.60",
                ecpm: "4.26",
                clickrate: "0.85%",
                naturalClickRadio: "0.93%",
                avgpos: "1.41",
                naturalAvgPos: "1.00",
                displaycount: 1099793,
                naturalDisplayAmount: 18780,
                clickcount:9338,
                isFirstScreen: 0,
                stateName: "投放结束",
                budTypeName: "5000.00/天",
                age: 32,
                address: 'New York No. 1 Lake Park',
                description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            };
            data.push(recode);
        }

/*        const data = [
            {
                planid: 0,
                gname: '总计',
                age: 32,
                address: 'New York No. 1 Lake Park',
                description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,

            },
            {
                planid: 1,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'New York No. 1 Lake Park',
                description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 2,
                gname: '时空召唤(新英雄月神)',
                age: 42,
                address: 'London No. 1 Lake Park',
                description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 3,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 4,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 5,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 6,
                gname: '时空召唤(新英雄月神)',
                age: 7,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 8,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 9,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 10,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 11,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 12,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 13,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 14,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 15,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 16,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 17,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 18,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 19,
                gname: '时空召唤(新英雄月神)',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 20,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 21,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 22,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 23,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 23,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                planid: 24,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
        ];*/

        this.state = {
            columns: columns,
            data:data,
            start:this.GetDateStr(0),
            end:this.GetDateStr(0),
            userTypeValue:'a',
            adTypeValue:'a',
            adId:'',
            username:'',
        }

    }

    GetDateStr = (AddDayCount) => {

        var dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth() + 1;//获取当前月份的日期
        var d = dd.getDate();

        return y + "-" + m + "-" + d;
    }


    handleClick(e) {
        this.setState(prevState => {
            const option = prevState.option;
            const newName = new Date().toLocaleString();
            const newSeries = {
                name: newName,
                type: 'line',
                data: Array(7).fill(0).map(x => Math.random() * 500 | 0)
            };
            return {
                option: {...option, series: [...option.series, newSeries],legend:{data:[...option.legend.data,newName]},areaStyle: {normal: {}}}
            }
        })
    }



    handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    handleTabChange(key) {
        console.log(`selected 1111 ${key}`);
        this.setState({tabSelected:key});
    }

    userTypeChange(e) {
        //console.log(`radio checked:${e.target.value}`);
        this.setState({userTypeValue:e.target.value,username:''})
    }

    usernameChange(e) {
        const username = e.target.value;
        this.setState({username:username})
    }

    usernameOnBlur(e) {
        const username = e.target.value;
        if(username == '') {
            this.setState({userTypeValue:'a'})
        } else {
            //console.log('usernameChange',e.target.value)
            this.setState({userTypeValue:''})
        }
    }

    adTypeChange(e) {
        //console.log(`radio checked:${e.target.value}`);
        this.setState({adTypeValue:e.target.value,adId:''})
    }

    adChange(e) {
        const adId = e.target.value;
        this.setState({adId:adId})
    }

    adOnBlur(e) {
        const adId = e.target.value;
        if(adId == '') {
            this.setState({adTypeValue:'a',adId:adId})
        } else {
            //console.log('usernameChange',e.target.value)
            this.setState({adTypeValue:'',adId:adId})
        }
    }

    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({ loading: true });
/*        reqwest({
            url: 'http://e.4399.cn:8112/targetAdPlan/getDatatraceProfileByGid.do',
        method: 'get',
/!*            // data: {
            //     results: 10,
            //     ...params,
            // },*!/
            type: 'json',
        }).then((data) => {
/!*            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination,
            });*!/
            console.log("12345",data);
        });*/
        const url1='http://127.0.0.1:8080/adgame_ms/statistics/loadPlanStatistics0508ForWebix?date1=2017-10-04&date2=2017-10-11&username=&planname=&planId=&gid=&stateName=-1&plantype=0&pageNo=1&pageSize=24&sort=money&usertype=none&isFirstScreen=-1&isExact=false';
        const url2 ='http://192.168.50.218:8080/newStatistics/loadUserInfo.do?startDate=2017-10-16&endDate=2017-10-16&userInfo=&userType=all&sort=totalMoney&pageNo=1&pageSize=10';
        fetch(url2/*{credentials: 'include'}*/)
            .then(response => response.json())
            .then(data =>
            {
                console.log(data.page.result)
/*                this.setState({
                    data:data.page.result,
                })*/
            })
            .catch(e => console.log("Oops, error", e))



    }

    componentDidMount() {
        this.fetch();
    }

    render() {

        const RadioButton = Radio.Button;
        const RadioGroup = Radio.Group;

        const Option = Select.Option;

        const TabPane = Tabs.TabPane;

        const operations = <PickerData getSearchTime={(start,end) => this.setState({start:start,end:end})}/>;

        const menu = (
            <Menu onClick={e => this.handleMenuClick(e)}>
                <Menu.Item key="1">投放中(暂停时段)</Menu.Item>
                <Menu.Item key="2">投放中(账户余额即将不足)</Menu.Item>
                <Menu.Item key="3">未投放(广告花费达到限额)</Menu.Item>
            </Menu>
        );


        const Allad = (
            <div>
                <div>
                    <label>{this.state.start},{this.state.end},{this.state.userTypeValue}</label>
                </div>
                <div className="search-Div">
                    <Row className="ColInfo" type="flex" align="middle" justify="start" gutter={16}>
                        <Col span={2}>用户:</Col>
                        <Col className="gutter-row">
                            <Row type="flex" justify="start">
                                <Col>
                                    <RadioGroup onChange={e => this.userTypeChange(e)} defaultValue={this.state.userTypeValue}
                                                value={this.state.userTypeValue}>
                                        <RadioButton value="a">全部用户</RadioButton>
                                        <RadioButton value="b">外部用户</RadioButton>
                                        <RadioButton value="c">内部用户</RadioButton>
                                    </RadioGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col  className="username-input">
                            <Input size="default" placeholder="请输入用户名或用户ID" onBlur={e => this.usernameOnBlur(e)} value={this.state.username}
                                   onChange={e => this.usernameChange(e)}/>
                        </Col>
                    </Row>
                    <Row className="ColInfo" type="flex" align="middle" justify="start" gutter={16}>
                        <Col span={2}>游戏:</Col>
                        <Col span={4}>
                            <Input size="default" placeholder="请输入游戏名或游戏ID" />
                        </Col>
                    </Row>
                    <Row className="ColInfo" type="flex" align="middle" justify="start" gutter={16}>
                        <Col span={2}>广告类型:</Col>
                        <Col>
                            <Row type="flex" justify="start">
                                <Col>
                                    <RadioGroup onChange={e => this.adTypeChange(e)} defaultValue="a" value={this.state.adTypeValue}>
                                        <RadioButton value="a">全部广告</RadioButton>
                                        <RadioButton value="b">搜索广告</RadioButton>
                                        <RadioButton value="c">定向广告</RadioButton>
                                    </RadioGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Col  className="username-input">
                                <Input size="default" placeholder="请输入广告名或者广告ID" onBlur={e => this.adOnBlur(e)} value={this.state.adId}
                                       onChange={e => this.adChange(e)}/>
                            </Col>
                        </Col>
                    </Row>

                    <Row className="ColInfo" type="flex" align="middle" justify="start" gutter={16}>
                        <Col span={2}>广告状态:</Col>
                        <Col>
                            <Row type="flex" justify="start">
                                <Col>
                                    <RadioGroup onChange={e => this.userTypeChange(e)} defaultValue="a" >
                                        <RadioButton value="a">全部类型</RadioButton>
                                        <RadioButton value="b">广告未投放</RadioButton>
                                        <RadioButton value="c">暂停中</RadioButton>
                                    </RadioGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="选择其他广告状态"
                                optionFilterProp="children"
                                onChange={value =>this.handleChange(value)}
                                filterOption={(input, option) => {/*console.log(option.props);*/return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;}}
                            >
                                <Option value="1">投放中(暂停时段)</Option>
                                <Option value="2">投放中(账户余额即将不足)</Option>
                                <Option value="3">未投放(广告花费达到限额)</Option>

                            </Select>
                        </Col>
                    </Row>

                    <Row type="flex" align="middle" justify="start">
                        <Col span={1} offset={2}>
                            <Button type="primary" icon="search" className="button">搜索</Button>
                        </Col>
                        <Col span={1}>
                            <Button type="primary" icon="reload" className="button">重置</Button>
                        </Col>
                    </Row>

                </div>
                <div className="sortDiv">
                    <Row type="flex" justify="start" align="middle" gutter={8}>
                        <Col>
                            <label>排序方式:</label>
                        </Col>
                        <Col>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="选择其他广告状态"
                                optionFilterProp="children"
                                onChange={value =>this.handleChange(value)}
                                filterOption={(input, option) => {/*console.log(option.props);*/return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;}}
                            >
                                <Option value="1">投放中(暂停时段)</Option>
                                <Option value="2">投放中(账户余额即将不足)</Option>
                                <Option value="3">未投放(广告花费达到限额)</Option>

                            </Select>
                        </Col>
                    </Row>
                </div>
                <Spin spinning={false}>
                        <Table
                            columns={this.state.columns}
                            bordered
                            size="middle"
                            /*expandedRowRender={record => { return null}}*/
                            /*scroll={{ y: 1240 }}*/
                            expandedRowRender={record => { if(record.key === 0) return null ;else return <AdDetail adInfo={record} />}}
                            /*expandedRowRender={record => { console.log(record);return <AdDetail adInfo={record} />}}*/
                            dataSource={this.state.data}
                            className="tableInfo"
                            pagination={{ pageSize: 24 }}
                            locale={{emptyText:'没有找到相关信息，请更换搜索条件!'}}
                            rowKey={record => record.planid}
                            useFixedHeader={true}
                           /* scroll={{ y: 740 }}*/
                            /*loading={true}*/
                        />
                </Spin>
            </div>
        );



        return (
            <div className="App">

                <div className="tab">
                        <Tabs tabBarExtraContent={operations} onChange={ key => this.handleTabChange(key)} type="card"
                              activeKey={this.state.tabSelected}>
                            <TabPane tab="用户列表" key="1">用户列表1</TabPane>
                            <TabPane tab="游戏列表" key="2">123</TabPane>
                            <TabPane tab="广告列表" key="3">{Allad}</TabPane>
                            <TabPane tab="用户进展" key="4">{Allad}</TabPane>
                        </Tabs>
                    {/*<Button onClick={e => this.handleTabChange('1')}>改变Ｔａｂ</Button>*/}
                </div>

            </div>
        );






    }
}

export default App;
