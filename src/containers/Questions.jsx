import React from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import PropTypes from 'prop-types';
import fetchQuestions from '../actions/questions';
import { QuestionsList } from '../components';
import { getQuestionItems, getQuestions } from '../selectors/questions';

class Questions extends React.Component {
  static propTypes = {
    fetchQuestions: PropTypes.func.isRequired,
    questions: PropTypes.instanceOf(Map),
    items: PropTypes.instanceOf(List)
  };

  static defaultProps = {
    questions: Map(),
    items: List()
  };

  componentDidMount() {
    const { fetchQuestions, questions } = this.props;
    fetchQuestions(
      questions.get('page'),
      questions.get('pageSize'),
      questions.get('fromDate'),
      questions.get('toDate'),
      questions.get('order'),
      questions.get('sort'),
      questions.get('q'),
      questions.get('accepted'),
      questions.get('closed')
    );
  }

  render() {
    const { questions, items } = this.props;

    return (
      <div>
        <QuestionsList
          questions={items}
          errorMessage={questions.get('error')}
          isFetching={questions.get('isFetching')}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: getQuestions(state),
  items: getQuestionItems(state)
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: (...params) => dispatch(fetchQuestions(...params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
