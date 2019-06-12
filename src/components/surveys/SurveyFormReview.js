// to review completed form
import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import formFields from './formFields'

const SurveyReview = ({onCancel, formValues}) => {
  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  })

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className='yellow darken-3 btn-flat' onClick={onCancel}>
        Back
      </button>
      <button type='submit' className='teal btn-flat right white-text'>
        Submit
        <i className='material-icons right'>done</i>
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps)(SurveyReview)
