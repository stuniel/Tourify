import React from 'react';

export const eventsRepository = {
  getArtist: function(artist) {
    return    fetch(`https://rest.bandsintown.com/artists/${artist}?app_id=Event_Search_App`)
      .then(data => data.json())
      .catch(err => console.error(err));
  },
  getEventsForArtist: function(artist, from, to) {
    return    fetch(`https://rest.bandsintown.com/artists/${artist}/events?app_id=Event_Search_App&date=${from}%2C${to}`)
      .then(data => data.json())
      .catch(err => console.error(err));
  }
}

export const formatUrl = (artist, from, to) => {
  return (`/events/${artist}&${from}&${to}`)
}

export const decodeUrl = (url) => {
  const data = url.split('/');
  const dataIndex = data.indexOf('events')+1;
  return data[dataIndex].split('&');
}
