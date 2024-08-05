import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);

    for (let i = 0; i < 5; i++) contacts.push(createFakeContact());

    await fs.writeFile(PATH_DB, JSON.stringify(contacts), {
      encoding: 'utf-8',
    });
  } catch (error) {
    console.log('Error reading or writing a file: ', error);
  }
};

generateContacts(5);
