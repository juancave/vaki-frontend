import Card from '../components/Card';
import Button from '../components/Button';

function GroupsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end my-4">
        <Button text="New Group" action={() => console.log('click on new group')} size="md" />
      </div>
      <div className="flex gap-2 flex-wrap md:flex-none">
        <Card className="w-full sm:w-[calc(50%-4px)] lg:w-[calc(100%/3-8px)]" color="#4E80A5" />
        <Card className="w-full sm:w-[calc(50%-4px)] lg:w-[calc(100%/3-8px)]" color="#6EAC64" />
        <Card className="w-full sm:w-[calc(50%-4px)] lg:w-[calc(100%/3-8px)]" color="#A65293" />
        <Card className="w-full sm:w-[calc(50%-4px)] lg:w-[calc(100%/3-8px)]" color="#4E80A5" />
        <Card className="w-full sm:w-[calc(50%-4px)] lg:w-[calc(100%/3-8px)]" color="#A65293" />
      </div>
    </div>
  );
}

export default GroupsPage;
