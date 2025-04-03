import { IndicatorIcon } from '../Icons';
import { cardsData } from './data';
import './index.scss';

export const DocumentCard = () => (
  <>
    {cardsData.map(card => (
      <div className="card" key={card.id}>
        <div className="card__header">
          <div className="card__header-left">
            <IndicatorIcon />
            <span className="card__header-left_number">{card.number}</span>
            <span className="card__header-left_date">{card.date}</span>
          </div>
          <div className="card__header-right">
            <IndicatorIcon />
            <IndicatorIcon />
            <IndicatorIcon />
          </div>
        </div>
        <div className="card__content">
          <IndicatorIcon />
          <div>
            <h1 className="card__content-title">{card.title}</h1>
            <p className="card__content-description">{card.description}</p>
            <p className="card__content-deadline">
              Срок выполнения: <span>{card.deadline}</span>
            </p>
          </div>
        </div>
      </div>
    ))}
  </>
);
