import PromptCard from './PromptCard';
const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt-layout'>
        {data?.map((post) => (
          <PromptCard
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            key={post._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
