import React from 'react';
import {header} from './header.scss';
import classNames from 'classnames'
export default class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={classNames(header,"flex_center_v","padding-left-md")}>
                <h1><em>cqaso专栏</em>后台管理系统</h1>
            </div>
        )
    }
}