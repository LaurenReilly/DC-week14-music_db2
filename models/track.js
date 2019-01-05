'use strict';
module.exports = (sequelize, DataTypes) => {
  const track = sequelize.define('track', {
    duration: DataTypes.INTEGER,
    track_name: DataTypes.STRING
  }, {});
  track.associate = function(models) {
    track.belongsTo(models.album);
  };
  return track;
};