import React from 'react'
import {Table, Icon} from 'antd'
import $ from 'jquery';
import Mock from 'mockjs';


Mock.mock('http://ajax.data.com',{
    'items|31':[
        {
            'key|+1': 1,
            'name':'@cname',
            'email':'@email',
            'address':'@county(true)',
            'age|15-30': 30,
            'remark': '@url()',
            'operate': '暂无'
        }
    ]
});

export default class myTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tDate: [],
            selectedRowKeys: []
        }
    }

    componentDidMount() {
        const data = [];
        let url = 'http://ajax.data.com';
        // ajax回调方法
        $.ajax({
            url: url,
            dataType:'json',
            success:function (data) {
                this.setState({
                    tDate: data['items']
                })
            }.bind(this)
        });
    }


    // checkbox状态
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    };

    render() {
        const columns = [{
            title: '姓名',
            width: '20%',
            dataIndex: 'name'
        }, {
            title: '年龄',
            width: '20%',
            dataIndex: 'age',
        }, {
            title: '住址',
            width: '20%',
            dataIndex: 'address'
        }, {
            title: '备注',
            width: '20%',
            dataIndex: 'remark',
            render(text) {
                return <a href={text} target="_blank">博客园</a>
            }
        }, {
            title: '操作',
            width: '20%',
            dataIndex: 'operate'
        }];

        const { selectedRowKeys } = this.state

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };

        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize)
            },
            onChange(current) {
                console.log('Current: ', current)
            }
        };

        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} />
        )
    }
}
