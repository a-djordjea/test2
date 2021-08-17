import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  getMsIc3AmsOnePlayerFactory,
  getMsOdspOnePlayerFactory,
  Ic3AmsMsOnePlayerFactory,
  IMSIc3AmsOnePlayer,
  IMSIc3AmsOnePlayerOptions,
  IMSOdspOnePlayer,
  IMSOdspOnePlayerOptions,
  IMSOnePlayer,
  IOnePlayerBaseLoadParams,
  LoadModeType,
  markStartOfOnePlayerLoad,
  OdspMsOnePlayerFactory,
  OnePlayerMediaType
} from '@msstream/components-oneplayer-loader';

import { EcsCloud, EcsEndpoint, EcsRolloutEnvironment } from '@msstream/utilities-settings-store';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const startedPerfMarks = markStartOfOnePlayerLoad();

const factoryParams = {
  /*aadUserId: 'TEST_USER_ID',
  aadTenantId: 'TEST_TENANT_ID',*/
  
  ecsEndpoint: EcsEndpoint.Prod,
  ecsRolloutEnvironment: EcsRolloutEnvironment.DogFood,
  ecsCloud: EcsCloud.Public
};
 
//getMsOdspOnePlayerFactory(factoryParams);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
