module.exports = function (userId, message, attachment, callback) {
  return this.execute('messages.send', {
    [ typeof userId === 'number' ? 'user_id' : 'user_ids' ]: typeof userId === 'number' ? userId : userId.join(','),
    message: message,
    attachment: attachment
  }, this.settings.token, callback)
}
