import { Component } from 'react';

import Searchbar from '../../components/Searchbar';
import ImageGallery from '../../components/ImageGallery';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import './App.css';

import FetchService from '../../services/fetch-services';
const fetchService = new FetchService();
const shortid = require('shortid');

class App extends Component {
  state = {
    images: [],
    showModal: false,
    isLoading: false,
    currentImg: { src: '', alt: '' },
    totalImgs: 0,
  };

  handlerSubmit = search => {
    window.scrollTo(0, 0);
    this.setState({ isLoading: true });
    fetchService.searchQuery = search;
    fetchService.pageNumber = 1;
    fetchService.currentCount = 0;
    fetchService
      .fetchData()
      .then(data => {
        const images = data.hits.map(el => ({
          ...el,
          key_id: shortid.generate(),
        }));
        this.setState({ images: [...images], totalImgs: data.totalHits });
      })
      .catch(console.log)
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    const HeightBeforeRender = document.documentElement.scrollHeight;
    this.setState({ isLoading: true });
    fetchService
      .nextDataPortion()
      .then(data => {
        this.setState(prevState => {
          const images = data.hits.map(el => ({
            ...el,
            key_id: shortid.generate(),
          }));
          return { images: [...prevState.images, ...images] };
        });
      })
      .catch(console.log)
      .then(() => {
        this.handlerScrollTo(HeightBeforeRender);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handlerItemClick = id => {
    this.toggleModal();
    const current = this.state.images.find(el => el.id === id);
    this.setState({
      currentImg: { src: current.largeImageURL, alt: current.tags },
    });
  };
  handlerScrollTo = height => {
    const searchElementHeight = 70;
    const buttonLoadmoreHeight = 80;
    const renderedContentHeight =
      document.documentElement.scrollHeight - height;
    const scrollTo =
      document.documentElement.scrollHeight - renderedContentHeight;
    window.scrollTo({
      top: scrollTo - (searchElementHeight + buttonLoadmoreHeight),
      behavior: 'smooth',
    });
  };
  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { images, isLoading, currentImg, totalImgs, showModal } = this.state;
    const isButtonVisible =
      images.length > 0 && fetchService.currentCount < totalImgs && !isLoading;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handlerSubmit} />
        <ImageGallery list={images} handlerItemClick={this.handlerItemClick} />

        {isButtonVisible ? (
          <Button isOff={false} onClick={this.handleLoadMore} />
        ) : (
          isLoading && <Button isOff={true} onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={currentImg.src} alt={currentImg.alt} />
          </Modal>
        )}
      </div>
    );
  }
}
export default App;
