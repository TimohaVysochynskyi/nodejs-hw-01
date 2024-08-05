import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]', { encoding: 'utf-8' });
  } catch (error) {
    console.log('Error writing a file: ', error);
  }
};

removeAllContacts();
