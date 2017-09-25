import React, {Component} from 'react';
import {Table, Button, DatePicker} from 'antd';
import ReactEcharts from 'echarts-for-react';
import { Spin } from 'antd';
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
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告']
            },
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
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    //stack: '总量',
                    areaStyle: {normal: {}},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
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
                }
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

    render() {
        const option = this.state.option;
        if(!option) {
            return (
                <div className="example">
                    <Spin />
                </div>
            )
        }
        return (
            <div>
                <Button onClick={e => this.handleClick(e)}>Add one</Button>
                <div>
                    <ReactEcharts
                        option={option}
                        style={{height: '350px', width: '100%'}}
                        className='react_for_echarts'/>
                </div>
            </div>
        );
    }
}

class App extends Component {


    constructor(props) {

        super(props);

        const columns = [
            {title: '广告名', dataIndex: 'name', key: 'name'},
            {title: 'Age', dataIndex: 'age', key: 'age'},
            {title: 'Address', dataIndex: 'address', key: 'address'},
            {title: 'Action', dataIndex: '', key: 'x', render: () => <Button>Delete</Button>},
        ];

        const data = [
            {
                key: 0,
                name: '总计',
                age: 32,
                address: 'New York No. 1 Lake Park',
                description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
            },
            {
                key: 1,
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
            },
            {
                key: 2,
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
            },
            {
                key: 3,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
            },
        ];

        this.state = {
            columns: columns,
            data:data,
        }

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


    render() {


        return (
            <div className="App">
                <Button onClick={e => this.handleClick(e)}>改变数据</Button>
                <Table
                    columns={this.state.columns}
                    expandedRowRender={record => { if(record.key === 0) return null ;else return <AdDetail adInfo={record} />}}
                    dataSource={this.state.data}
                />
            </div>
        );
    }
}

export default App;
