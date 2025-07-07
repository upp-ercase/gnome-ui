import { Image } from '../../elements/Image/Image';
import { ExpertType } from '../../types';

export const Author: React.FC<{ author: ExpertType }> = ({ author }) => (
  <div className="group flex gap-2 items-center">
    {/* {author.profilePicture && ( */}
    <div className="w-11 h-11">
      <Image
        data={author.profilePicture}
        aspectRatio="square"
        rounded="full"
        fallbackSrc="https://ui-avatars.com/api/?name=User&background=cccccc&color=ffffff&size=250"
      />
    </div>
    {/* )} */}
    <div className="flex flex-col gap-1">
      <div className="font-heading font-medium text-lg dark:text-slate-100">
        {author.name}
      </div>
      {author.role && (
        <div className="text-sm text-slate-400 dark:text-slate-100/50">
          {author.role}
        </div>
      )}
    </div>
  </div>
);
