import React, {Component} from 'react';
import {Table, Button, DatePicker} from 'antd';
import ReactEcharts from 'echarts-for-react';
import { Spin } from 'antd';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import { Input } from 'antd';
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
                <Row>
                    <Col span={24}>
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
                    <Col span={12}>
                        <Button onClick={e => this.handleClick(e)}>花费</Button>
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

class App extends Component {


    constructor(props) {

        super(props);

        const columns = [
            {title: '广告名', dataIndex: 'name', key: 'name',width:100},
            {title: '游戏信息', dataIndex: 'age', key: 'age',width:100},
            {title: '花费              (现金+虚拟)', dataIndex: 'age', key: 'age0',width:150
/*                render: text => <a href="#">{text}111</a>,
                children: [
                    {dataIndex: 'rlCost', key: 'age1', title: '現金',render: text => <a href="#">{text}<br/>111</a>,},
                    /!*{dataIndex: 'vlCost', key: 'age2',title: '虚拟',},*!/
                ]*/
            },
            {title: '下载均价(出价)', dataIndex: 'age', key: 'age1',},
            {title: 'ECPM', dataIndex: 'age', key: 'age2',},
            {title: '下载率%(自然下载率)', dataIndex: 'age', key: 'age3',},
            {title: '展示量%(自然展示量)', dataIndex: 'age', key: 'age4',},
            {title: '下载量%(自然下载量)', dataIndex: 'age', key: 'age5',},
            {title: '投放排名%(自然排名)', dataIndex: 'age', key: 'age6',},
            {title: '首屏', dataIndex: 'age', key: 'age7',},
            {title: '状态', dataIndex: 'age', key: 'age8',},
            {title: '限额(元)', dataIndex: 'age', key: 'age9',},
            {title: 'Address', dataIndex: 'address', key: 'address'},
            {title: 'Action', dataIndex: '', key: 'x', render: () => <Button>Delete</Button>},
        ];

        const data = [
            {
                key: 0,
                name: '总计',
                age: 32,
                address: 'New York No. 1 Lake Park',
                description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,

            },
            {
                key: 1,
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 2,
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 3,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 4,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 5,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 6,
                name: 'Joe Black',
                age: 7,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 8,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 9,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 10,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 11,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 12,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 13,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 14,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 15,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 16,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 17,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 18,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 19,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 20,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 21,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 22,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 23,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 23,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
            },
            {
                key: 24,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                rlCost:1,
                vlCost:1,
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

    userTypeChange(e) {
        console.log(`radio checked:${e.target.value}`);
    }


    render() {

        const RadioButton = Radio.Button;
        const RadioGroup = Radio.Group;


        return (
            <div className="App">
                <div>
                    <Row className="ColInfo" type="flex" align="middle" justify="start">
                        <Col span={2}>用户:</Col>
                        <Col className="gutter-row">
                            <Row type="flex" justify="start">
                                <Col>
                                    <RadioGroup onChange={e => this.userTypeChange(e)} defaultValue="a" >
                                        <RadioButton value="a">全部用户</RadioButton>
                                        <RadioButton value="b">外部用户</RadioButton>
                                        <RadioButton value="c">内部用户</RadioButton>
                                    </RadioGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8} className="username-input">
                            <Row  type="flex" align="middle" justify="start">
                                <Input size="large" placeholder="用户名" />
                            </Row>
                        </Col>
                    </Row>
                    <Row className="ColInfo" type="flex" align="middle" justify="start">
                        <Col span={2}>投放时间:</Col>
                        <Col span={22}>
                            <Row type="flex" justify="start">
                                <Col>
                                2017.08.10-2017.08.21
                                </Col>
                            </Row>
                        </Col>
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

                </div>


                <Button onClick={e => this.handleClick(e)}>改变数据</Button>
                <Table
                    columns={this.state.columns}
                    bordered
                    size="middle"
                    /*scroll={{ y: 1240 }}*/
                    scroll
                    expandedRowRender={record => { if(record.key === 0) return null ;else return <AdDetail adInfo={record} />}}
                    dataSource={this.state.data}
                    className="tableInfo"
                />
            </div>
        );
    }
}

export default App;
