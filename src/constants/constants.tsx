import { ReactNode } from 'react';
import {
  CalendarIcon,
  DocumentValidationIcon,
  FileAddIcon,
  FileIcon,
  FolderIcon,
  FolderMoveToIcon,
  MessageMultipleIcon,
} from '../components/Icons';

export interface IItemsProps {
  icon: ReactNode;
  label: string;
  to: string;
  children?: IItemsProps[];
}

export const items: IItemsProps[] = [
  {
    icon: <FileAddIcon />,
    label: 'Главная',
    to: '/',
  },
  {
    icon: <CalendarIcon />,
    label: 'Календарь',
    to: '/calendar',
  },
  {
    icon: <FolderIcon />,
    label: 'Мои документы',
    to: '/my-documents',
  },
  {
    icon: <MessageMultipleIcon />,
    label: 'Сообщения',
    to: '/messages',
  },
  {
    icon: <FolderMoveToIcon />,
    label: 'Отправленные',
    to: '/sent',
    children: [
      {
        icon: <FileIcon />,
        label: 'На исполнение',
        to: '/sent/on-execution',
      },
      {
        icon: <DocumentValidationIcon />,
        label: 'Для ознакомления',
        to: '/sent/for-review',
      },
    ],
  },
];
