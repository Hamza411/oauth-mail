import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMessages } from '../../actions';
import GoogleAuth from '../GoogleAuth';
import PaginationExamplePagination from '../PaginationExamplePagination';

class MailList extends Component {

    componentDidMount() {
        this.props.fetchMessages()
    }

    renderList = () => {
        if (this.props.mails[0]) {
            const data = this.props.mails[0].threads;
            // console.log(data)
            return data.map((thread, index) => {
                return (
                    <div className="item" key={index}>
                        <i className="large middle aligned icon envelope"></i>
                        <div className="content">
                            <table className="ui celled table">
                                <thead>
                                    <tr><th>Mail</th>
                                    </tr></thead>
                                <tbody>
                                    <tr>
                                        <td data-label="MailBody">
                                            <Link to={`/mails/${thread.id}`} >
                                                {thread.snippet}
                                            </Link></td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* {console.log(thread)} */}
                            {/* {console.log("*****", this.props.mails[0].threads[0])} */}
                            {/* <div className="description">{stream.description}</div> */}

                        </div>
                    </div>
                )
            })
        }
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <Link to="/mails/new" className="ui button primary">
                        Compose
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Mails</h2>
                {this.renderCreate()}

                <div className="ui celled list">{this.renderList()}</div>
                <PaginationExamplePagination offset={1} limit={1} total={1} />
                {/* {this.renderList()} */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mails: Object.values(state.mails),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchMessages })(MailList);