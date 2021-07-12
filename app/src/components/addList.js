import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../actions';
const AddList = forwardRef((props, ref) => {
  const initialState = {
    name: '',
    errors: {
      name: 'Name is Required',
    },
  };
  const [state, setState] = useState(initialState);
  const [submited, setSubmited] = useState(false);
  const { name, errors } = state;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    event.preventDefault();
    let errors = state.errors;

    switch (name) {
      case 'name':
        if (value.length == 0)
          errors.name = value.length === 0 ? ' Name is Required!' : '';
        else {
          errors.name =
            value.length < 3 ? ' Name must be 3 characters long!' : '';
        }

        break;
      default:
        break;
    }
  };
  const onChange = (e) => {
    handleChange(e);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );

    return valid;
  };
  async function addList() {
    const body = {
      boardId: process.env.REACT_APP_BOARD_ID,
      name: name,
    };

    const response = await dispatch(allActions.lists.listAdd(body));
    if (response) props.onListUpdated();
  }
  useImperativeHandle(ref, () => ({
    addLists() {
      setSubmited(true);
      const valid = validateForm(state.errors);

      if (valid == true) {
        addList();
      }
    },
  }));
  return (
    <div>
      <form role='form'>
        <div class='form-group form-group-icon'>
          <input
            type='text'
            title='Name'
            minLength='3'
            className='form-control border'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required='true'
          ></input>

          {errors.name.length > 0 && submited && (
            <span className='error'>{errors.name}</span>
          )}
        </div>
      </form>
    </div>
  );
});
export default AddList;
