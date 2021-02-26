import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions';
import GoogleAuth from '../GoogleAuth';

class MailList extends Component {
    componentDidMount() {
        this.props.fetchMessages()
    }

    // renderAdmin(stream) {
    //     if (stream.userId === this.props.currentUserId) {
    //         return (
    //             <div className="right floated content">
    //                 <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
    //                 <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
    //             </div>
    //         )
    //     }
    // }

    renderList() {
        return this.props.mails.map(threads => {
            return (
                <div className="item">
                    <div className="content">
                        {threads.snippet}
                        {console.log("*************", threads)}
                        {/* <div className="description">{stream.description}</div> */}
                    </div>
                </div>
            )
        })
    }

    // renderCreate() {
    //     if (this.props.isSignedIn) {
    //         return (
    //             <div style={{ textAlign: "right" }}>
    //                 <Link to="/streams/new" className="ui button primary">
    //                     Create Stream
    //                 </Link>
    //             </div>
    //         )
    //     }
    // }

    render() {
        return (
            <div>
                <GoogleAuth />
                <h2>Mails</h2>
                {/* <div className="ui celled list">{this.renderList()}</div> */}
                {this.renderList()}
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