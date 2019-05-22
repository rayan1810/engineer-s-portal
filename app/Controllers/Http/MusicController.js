'use strict'
const Music = use('App/Models/Music')
class MusicController {
async home({view}) {

    // Create a job
    const job = new Music;
    job.title = 'My job title';
    job.link = 'http://google.com';
    job.description = 'My job description';

    await job.save();

    // Fetch a job
    const musics = await Music.all();

    return view.render('music', { musics: musics.toJSON() })
}
}

module.exports = MusicController

