import { Component } from 'react';

import './css/styles.css';
import SearchPhotos from '../service/FetchAPI';
import Searchbar from './Searchbar';
import ImageGalleryItem from './ImageGalleryItem';
import LoadMoreButton from './Button';
import Loader from './Loader';
import Modal from './Modal';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    items: [],
    showMoreButton: false,
    isLoading: false,
    isModalOpen: false,
    selectedImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, page } = this.state;
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      SearchPhotos(searchValue, page)
        .then(({ hits, totalHits }) => {
          this.setState(prevState => ({
            items: [...prevState.items, ...hits],
            showMoreButton: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch()
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSubmit = searchValue => {
    this.setState({ searchValue, page: 1, items: [] });
  };

  handleButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = image => {
    this.setState({ isModalOpen: true, selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false, selectedImage: null });
  };

  render() {
    const { items, showMoreButton, isLoading, isModalOpen, selectedImage } =
      this.state;

    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        <div className="GalleryWrapper">
          <ul className="ImageGallery">
            <ImageGalleryItem items={items} openModal={this.handleOpenModal} />
          </ul>
          {showMoreButton && (
            <LoadMoreButton handleButton={this.handleButton} />
          )}
          {isLoading && <Loader />}
          {isModalOpen && (
            <Modal image={selectedImage} closeModal={this.handleCloseModal} />
          )}
        </div>
      </>
    );
  }
}
