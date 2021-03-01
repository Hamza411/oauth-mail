import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMessages } from '../../actions';
import GoogleAuth from '../GoogleAuth';

class MailList extends Component {
    
    componentDidMount() {
        this.props.fetchMessages()
    }

    renderList = () => {
        return this.props.mails.map((thread, index) => {
            return (
                <div className="item" key={index}>
                    <div className="content">
                        {thread.snippet}
                        {console.log("*************", thread)}
                        {/* <div className="description">{stream.description}</div> */}
                    </div>
                </div>
            )
        })
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
                <GoogleAuth />
                <h2>Mails</h2>
                {/* <div className="ui celled list">{this.renderList()}</div> */}
                {this.renderList()}
                {this.renderCreate()}
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