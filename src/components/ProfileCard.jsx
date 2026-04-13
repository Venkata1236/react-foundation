import PropTypes from 'prop-types';

function ProfileCard({ name, role, avatar }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 max-w-sm w-full flex items-center gap-4">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="h-16 w-16 rounded-full object-cover border-2 border-blue-500"
      />
      <div className="flex flex-col">
        <span className="text-white text-xl font-semibold leading-tight">
          {name}
        </span>
        <span className="text-blue-400 text-sm font-medium mt-1">
          {role}
        </span>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfileCard;