import React from 'react';
import Pagination from 'semantic-ui-react-button-pagination';

class PaginationExamplePagination extends React.Component {
    constructor() {
        super();
        this.state = { offset: 0 };
    }

    handleClick(offset) {
        this.setState({ offset });
    }

    render() {
        return (
            <Pagination
                offset={this.state.offset}
                limit={10}
                total={100}
                onClick={(e, props, offset) => this.handleClick(offset)}
            />
        );
    }
}

export default PaginationExamplePagination;