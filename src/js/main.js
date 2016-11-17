import $ from 'jquery';

import { getProfile, ExtractUser } from "./user";


getProfile().then(ExtractUser);
