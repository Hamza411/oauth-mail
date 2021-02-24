import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMessages } from '../../actions';
import GoogleAuth from '../GoogleAuth';

class MailList extends Component {
    componentDidMount() {
        this.props.fetchMessages()
        // console.log(this.props.fetchMessages())
    }

    // renderList() {
    //     return this.props.fetchMessages.map(message => {
    //         return (
    //             <div className="item" key={message.id}>
    //                 {/* <i className="large middle aligned icon camera" /> */}
    //                 <div className="content">
    //                     {/* <Link to={`/streams/${stream.id}`} className="header"> */}
    //                     {console.log(message)}
    //                     {/* </Link> */}
    //                     {/* <div className="description">{stream.description}</div> */}
    //                 </div>
    //             </div>
    //         )
    //     })
    // }

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
                {this.fetchMessages}
                {/* <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()} */}
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