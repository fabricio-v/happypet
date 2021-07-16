import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from "react-icons/fc";


export const SidebarData = [
  {
    title: 'Loja',
    path: '/app',
    icon: <FcIcons.FcShop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Vendas',
        path: '/sale',
        icon: <FcIcons.FcMoneyTransfer />
      },
      {
        title: 'Consulta Vendas',
        path: '/consultationSale',
        icon: <FcIcons.FcBullish />
      }
    ]
  },
  {
    title: 'Agenda',
    path: '/app',
    icon: <FcIcons.FcAddressBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Criar Agendamento',
        path: '/scheduling',
        icon: <FcIcons.FcPlanner />,
        cName: 'sub-nav'
      },
      {
        title: 'Consulta Agendamento',
        path: '/schedule/consultationSchedule',
        icon: <FcIcons.FcFinePrint />,
        cName: 'sub-nav'
      },
      {
        title: 'Cancelar Agendamento',
        path: '/cancelSchedule',
        icon: <FcIcons.FcLeave />
      }
    ]
  },
  {
    title: 'Cadastro',
    path: '/app',
    icon: <FcIcons.FcAddDatabase />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pet´s',
        path: '/pet',
        icon: <FcIcons.FcLinux />
      },
      {
        title: 'Serviços',
        path: '/petservices',
        icon: <FcIcons.FcServices />
      },
      {
        title: 'Usuarios',
        path: '/users',
        icon: <FcIcons.FcConferenceCall />
      },
      {
        title: 'Produtos',
        path: '/product',
        icon: <FcIcons.FcShipped />
      },
      {
        title: 'Profissionais',
        path: '/professional',
        icon: <FcIcons.FcManager />
      }
    ]
  }
];

