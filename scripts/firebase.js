/**
 * @file firebase.js
 * Firebase configuration settings loader.
 * Loads Firebase settings for the active project (firebase use) and the currently logged in Firebase user.
 * Removes the need to store Firebase settings in the `config/[env].json` file(s).
 *
 * @author Craig Myles
 * @version 1.0.0
 * Last updated Wed 28 Nov
 */

const client = require('firebase-tools');

module.exports = async function loadFirebaseSettings(callback) {
  try {
    console.info('Obtaining Firebase project settings...');
    let fbConfig = await client.setup.web();
    process.env.NODE_CONFIG = JSON.stringify({ firebase: fbConfig });
    console.info(
      `Applied Firebase project settings for '${fbConfig.projectId}' to config.`
    );
    callback();
  } catch (error) {
    console.error(error && error.message ? error.message : error);
    // throw error;
  }
};
