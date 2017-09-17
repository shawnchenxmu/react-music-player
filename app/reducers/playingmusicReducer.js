export default function reducer(state={
    musicId: 0,
    name: '',
    artists: '',
    lyrics: '《等你, 在雨中》\n余光中\n等你, 在雨中, 在造虹的雨中\n蝉声沉落, 蛙声升起\n一池的红莲如红焰, 在雨中\n你来不来都一样, 竟感觉\n每朵莲都像你\n尤其隔着黄昏, 隔着这样的细雨\n永恒, 刹那, 刹那, 永恒\n等你, 在时间之外在时间之内,\n等你, 在刹那, 在永恒\n如果你的手在我的手里, 此刻\n如果你的清芬\n在我的鼻孔, 我会说, 小情人\n诺, 这只手应该采莲, 在吴宫\n这只手应该\n摇一柄桂浆, 在木兰舟中\n一颗星悬在科学馆的飞檐\n耳坠子一般的悬着\n瑞士表说都七点了 忽然你走来\n步雨后的红莲, 翩翩, 你走来\n像一首小令\n从一则爱情的典故里你走来\n从姜白石的词里, 有韵地, 你走来',
    coverUrl: 'http://p1.music.126.net/Gr8tkXg_Q1puiPFxq28_ow==/3387595326047017.jpg',
    fetching: false,
    fetched: false,
    error: null
  }, action) {

    switch (action.type) {
      case "PLAYING_MUSIC": {
        return Object.assign({},
          state,{
          fetching: false,
          fetched: true,
          musicId: action.payload.musicId,
          name: action.payload.name,
          artists: action.payload.artists,
          coverUrl: action.payload.coverUrl
        })
      }
      case "FETCH_LYRICS": {
        return Object.assign({}, state, {fetching: true, lyrics: action.payload})
      }
      case "GET_MUSIC_URL": {
        return Object.assign({},
          state,{
          fetching: false,
          fetched: true,
          url: action.payload
        })
      }
      case "PLAYING_MUSIC_REJECTED": {
        return Object.assign({}, state, {fetching: false, error: action.payload})
      }
    }

    return state
}
