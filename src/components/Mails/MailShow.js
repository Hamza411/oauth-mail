import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMessage } from '../../actions';
import history from '../../history';
import Modal from '../Modal';

class MailShow extends React.Component {

    componentDidMount() {
        this.props.fetchMessage(this.props.match.params.id)
    }

    renderMsg = () => {
        const data = this.props.mail;
        // console.log(data)
        return data.map((thread, index) => {
            return (
                <div className="item" key={index}>
                    <h2>{thread.snippet}</h2>
                </div>
            )
        })
    }
    renderActions() {
        return (
            <div>
                <Link to="/" className="ui button">Close</Link>
            </div>
        )
    }

    render() {
        if (!this.props.mail) {
            return <div> Loading . . .</div>
        }
        return (
            <div>
                <Modal
                    title="Message Body "
                    content={this.renderMsg()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push("/")}
                />
                {/* {console.log(this.props.mail)} */}
                {/* <h3>Message Body: </h3>
                {this.renderMsg()}
                <Link to="/" className="ui button">Back</Link> */}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // return { mail: state.mail[ownProps.match.params.id] }
    return { mail: Object.values(state.mails), }

}

export default connect(mapStateToProps, { fetchMessage })(MailShow);