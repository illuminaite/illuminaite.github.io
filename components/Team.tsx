import Image from 'next/image'
import { TEAM_MEMBERS } from './TeamMembers'

export default function TeamSection() {
  return (
    <section id="team" className="bg-white mx-8">
      <div className="w-full p-16">

        {/* Team grid: 3 per row */}
        <div className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-start text-left w-full"
              >
                <div className="relative w-full aspect-[4/3] rounded overflow-hidden rounded-lg">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <span className="mt-3 text-xl">
                  {member.name}
                </span>
                <span className="mt-1 text-sm text-gray-500">
                  {member.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
