import React from 'react';
import { Users, TreePine, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types/project';
import ProjectProgress from '../common/ProjectProgress';

type ProjectCardProps = Project;

export default function ProjectCard({
  title,
  description,
  image,
  impact,
  raised,
  goal,
  supporters,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-green-100">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 line-clamp-2">{description}</p>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <TreePine className="h-4 w-4" />
          <span>{impact}</span>
        </div>

        <ProjectProgress raised={raised} goal={goal} />

        <div className="flex justify-between items-center pt-4">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Users className="h-4 w-4" />
            <span>{supporters} supporters</span>
          </div>
          <button className="flex items-center space-x-1 text-green-600 hover:text-green-700">
            <span>Learn More</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}