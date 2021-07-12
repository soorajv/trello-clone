import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import Tooltip from '@material-ui/core/Tooltip';

import allActions from '../actions';
import './board.css';
import AddList from './addList';

const Board = () => {
  const [lists, setLists] = useState([]);

  //ADD List
  const [showModalAddLists, setShowModalAddLists] = useState(false);
  const handleCloseAddLists = () => setShowModalAddLists(false);
  const handleShowAddLists = () => setShowModalAddLists(true);
  const addListRef = useRef();
  const addLists = () => {
    addListRef.current.addLists();
  };
  const handleAddList = () => {
    handleShowAddLists();
  };
  const listUpdated = () => {
    fetchLists();

    handleCloseAddLists();
  };

  const dispatch = useDispatch();
  async function fetchLists() {
    const response = await dispatch(allActions.lists.listByBoardLoad());
    if (response) {
      setLists(response.payload);
    }
  }

  useEffect(() => {
    fetchLists();
  }, []);
  return (
    <div className='bg-blue w-full h-screen font-sans '>
      <div className='flex p-2 bg-blue-dark items-center'>
        <div className='mx-0 md:mx-auto'>
          <h1 className='text-blue-lighter text-xl flex items-center font-sans italic'>
            <svg
              className='fill-current h-8 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 50 50'
            >
              <path d='M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z' />
            </svg>
            Trello
          </h1>
        </div>
      </div>
      <div className='flex m-4 justify-between'>
        <div className='flex'>
          <h3 className='text-white mr-4'>Trello Board </h3>
        </div>
      </div>
      <div className='flex px-4 pb-8 items-start overflow-x-scroll'>
        <Modal
          show={showModalAddLists}
          onHide={handleCloseAddLists}
          backdrop='static'
        >
          <Modal.Header closeButton>
            <Modal.Title>Add List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddList ref={addListRef} onListUpdated={listUpdated}></AddList>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => addLists()}>
              Add List
            </Button>

            <Button variant='primary' onClick={handleCloseAddLists}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {lists &&
          lists.map((list, listIndex) => (
            <div className='rounded bg-grey-light  flex-no-shrink w-64 p-2 mr-3'>
              <div className='flex justify-between py-1'>
                <h3 className='text-sm'>{list.title}</h3>
                <svg
                  className='h-4 fill-current text-grey-dark cursor-pointer'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z' />
                </svg>
              </div>
              <div className='text-sm mt-2'>
                {list.cards &&
                  list.cards.map((card, cardIndex) => (
                    <div className='bg-white p-2 rounded mt-1 border-b border-grey  hover:bg-grey-lighter cardPadding'>
                      {card.text}
                      <div className='text-grey-darker mt-2 ml-2 flex justify-between items-start alignRight cursor-pointer'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          className='bi bi-dash-circle '
                          viewBox='0 0 16 16'
                        >
                          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                          <path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z' />
                        </svg>
                      </div>
                    </div>
                  ))}

                <p className='mt-3 text-grey-dark cursor-pointer'>
                  Add a card...
                </p>
              </div>
            </div>
          ))}
        <Tooltip title='Add List' placement='right'>
          <div className='cursor-pointer' onClick={() => handleAddList()}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              fill='currentColor'
              className='bi bi-list cursor-pointer'
              viewBox='0 0 16 16'
            >
              <path
                fill-rule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              className='bi bi-plus cursor-pointer'
              viewBox='0 0 16 16'
            >
              <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
            </svg>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
export default Board;
