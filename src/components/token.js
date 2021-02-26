import React, { Component } from 'react';

class token extends Component {

    componentDidMount() {
        const user_mail_id = localStorage.getItem('user_mail_id');
        const access_token = localStorage.getItem('access_token');
        console.log(access_token);
        var config = {
            headers: {
                'Authorization': "BEARER " + access_token,
                "Accept": "application/json",
                "scope": "https://mail.google.com"
            },
        }
        // console.log(user_mail_id);
        axios.get('https://www.googleapis.com/gmail/v1/users/' +
            user_mail_id
            + '/messages/', config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


            // var data = {
            //     "grant_type": "client_credentials",
            //     "scope": "https://mail.google.com/",
            //     "client_id": "1075903194307-lgglf5n8qsk3lfhr2j4k4512k60scmh7.apps.googleusercontent.com",
            //     "client_secret": "C3FdvDVO4nzBgRb079-ve828"
            // };
            // var config = {
            //     headers: {
            //         'Authorization': "BEARER " + token,
            //         "Accept": "application/json",
            //         "scope": "https://mail.google.com"
            //     },
            // }
            // // console.log(user_mail_id);
            // axios.get(`https://www.googleapis.com/gmail/v1/users/${email}/messages/`, data)
            //     .then(function (response) {
            //         console.log(response);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default token;