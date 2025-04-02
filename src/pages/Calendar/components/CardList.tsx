import { useAsideStore } from '@/store/useAsideStore';
import { IconButton, Card, Aside } from '@/components';
import { CloseIcon } from '@/components/Icons';
import './CardList.scss';

const CardList = () => {
  const { close, isOpen } = useAsideStore();
  return (
    <Aside className={`aside-right ${isOpen[2] ? 'open' : ''}`}>
      <div className="card-list">
        <div className="card-list__header">
          <h2 className="card-list__title">15 июля, 2024</h2>
          <IconButton onClick={() => close(2)} icon={<CloseIcon />} />
        </div>
        <div className="card-list__subtitle">
          <p> Все документы за этот день</p>
        </div>
        <Card />
      </div>
    </Aside>
  );
};

export default CardList;
