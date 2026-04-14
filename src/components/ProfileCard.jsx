import PropTypes from 'prop-types';

function ProfileCard({ name, role, avatar, location }) {
  return (
    <div className="bg-gray-800 hover:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl p-6 max-w-sm w-full flex items-center gap-4 transition-all duration-300 border border-gray-700 hover:border-blue-900">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="h-16 w-16 rounded-full object-cover border-2 border-blue-500 hover:scale-110 transition-transform duration-300"
      />
      <div className="flex flex-col">
        <span className="text-white text-xl font-semibold leading-tight">{name}</span>
        <span className="text-blue-400 text-sm font-medium mt-1">{role}</span>
        <span className="text-gray-500 text-xs mt-1">📍 {location}</span>
        <a href="mailto:bommavaramvenkat2003@gmail.com" className="text-gray-500 text-xs mt-1 hover:text-blue-400 transition-colors">
          📧 bommavaramvenkat2003@gmail.com
        </a>
        <a href="tel:+919121507345" className="text-gray-500 text-xs mt-1 hover:text-blue-400 transition-colors">
        📞 +91 9121507345
        </a>
        <a href="https://github.com/Venkata1236" target="_blank" rel="noreferrer" className="text-gray-500 text-xs mt-1 hover:text-blue-400 transition-colors">
        🐙 github.com/Venkata1236
        </a>
        <span className="mt-2 text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full w-fit flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Available for work
        </span>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProfileCard;