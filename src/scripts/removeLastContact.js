import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts), {
        encoding: 'utf-8',
      });
    }
  } catch (error) {
    console.log('Error reading or writing a file: ', error);
  }
};

removeLastContact();
