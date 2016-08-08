export const changeTitle = (text) => {
  return {
    type: 'CHANGE_TITLE',
    text
  }
}

export const setVisibleIntro = (name) => {
	return {
		type: 'VISIBLE_INTRO',
		name
	}
}