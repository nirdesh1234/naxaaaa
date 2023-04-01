import { put, takeLatest, all } from "redux-saga/effects";
import {
  FETCH_SERVICES_REQUEST,
  fetchServicesSuccess,
  fetchServicesFailure
} from "./servicesActions";

function* fetchServices() {
  try {
    const response = yield fetch("https://admin.naxa.com.np/api/services");
    const services = yield response.json();
    yield put(fetchServicesSuccess(services));
  } catch (error) {
    yield put(fetchServicesFailure(error.message));
  }
}

function* watchFetchServices() {
  yield takeLatest(FETCH_SERVICES_REQUEST, fetchServices);
}

export default function* servicesSagas() {
  yield all([watchFetchServices()]);
}
