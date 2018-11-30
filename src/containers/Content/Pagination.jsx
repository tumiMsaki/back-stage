
import React, {Component} from 'react'
import pagecomponent from '../../style/Pagination.less'

class Pagecomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, //当前页码
            groupCount: 3, //页码分组
            startPage: 1,  //分组开始页码
            totalPage:8 //总页数
        }
        this.createPage = this.createPage.bind(this)
    }

    // componentDidMount() {
    //     this.setState({
    //         totalPage: this.props.pageConfig.totalPage
    //     })
    //     this.props.pageCallbackFn(this.state.currentPage)
    // }

    createPage() {
        //const {totalPage} = this.props.pageConfig;
        const {currentPage, groupCount, startPage,totalPage} = this.state;
        let pages = []
        //上一页
        if (totalPage <= 5) {
            for (let i = 1; i <= totalPage; i++) {
                pages.push(<div key={i} onClick={this.pageClick.bind(this, i)}
                               className={currentPage === i ? pagecomponent.activePage : null}>{i}</div>)
            }
        } else {

            pages.push(<div className={currentPage === 1 ? pagecomponent.activePage : null} key={1}
                           onClick={this.pageClick.bind(this, 1)}>1</div>)
            let pageLength = 0;
            if (groupCount + startPage > totalPage) {
                pageLength = totalPage
            } else {
                pageLength = groupCount + startPage;
            }
            //前面省略号(当当前页码比分组的页码大时显示省略号)
            if (currentPage >= groupCount + 1 ) {
                pages.push(<div className="" key={-1}>···</div>)
            }
            //非第一页和最后一页显示
            for (let i = startPage; i < pageLength; i++) {
                if (i <= totalPage - 1 && i > 1) {
                    pages.push(<div className={currentPage === i ? pagecomponent.activePage : null} key={i}
                                   onClick={this.pageClick.bind(this, i)}>{i}</div>)
                }
            }
            //后面省略号
            if (totalPage - startPage >= groupCount + 1) {
                pages.push(<div className="" key={-2}>···</div>)
            }
            //最后一页
            pages.push(<div className={currentPage === totalPage ? pagecomponent.activePage : null} key={totalPage}
                           onClick={this.pageClick.bind(this, totalPage)}>{totalPage}</div>)
        }
        return pages;

    }

    //页码点击
    pageClick(currentPage) {
        const {groupCount} = this.state
        const getCurrentPage = this.props.pageCallbackFn;
        //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
        if (currentPage > groupCount) {
            this.setState({
                startPage: currentPage - 1,
            })
        }
        if (currentPage < groupCount) {
            this.setState({
                startPage: 1,
            })
        }
        //第一页时重新设置分组的起始页
        if (currentPage === 1) {
            this.setState({
                startPage: 1,
            })
        }
        this.setState({
            currentPage
        })
        //将当前页码返回父组件
        // getCurrentPage(currentPage)
    }

    //上一页事件
    prePageHandeler() {
        let {currentPage} = this.state
        if (--currentPage === 0) {
            return false
        }
        this.pageClick(currentPage)
    }

    //下一页事件
    nextPageHandeler() {
        let {currentPage,totalPage} = this.state
       // const {totalPage} = this.props.pageConfig;
        if (++currentPage > totalPage) {
            return false
        }
        this.pageClick(currentPage)
    }
    render() {
        const pageList = this.createPage();
        return (
            <div className={pagecomponent.all}>
            <div className={pagecomponent.list}>
            <bottom className={this.state.currentPage === 1 ? pagecomponent.nomore : null} onClick={this.prePageHandeler.bind(this)}
                       key={0}>
            <span className={pagecomponent.ico_pre}></span></bottom>
            <div className={pagecomponent.page_container}>
                {pageList}
            </div>
            <bottom className={this.state.currentPage === this.state.totalPage ? pagecomponent.nomore : null}
                       onClick={this.nextPageHandeler.bind(this)}
                       key={this.state.totalPage + 1}>
                       <span className={pagecomponent.ico_next}></span>
                       </bottom>
            </div>
            <div className={pagecomponent.right}>
                <span>前往</span>
                <input type="number"></input>
                <span>页</span>
                <div className={pagecomponent.jump_to}>跳转</div>
            </div>
            </div>
        )
    }
}

export default Pagecomponent