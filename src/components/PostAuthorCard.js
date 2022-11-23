import React from 'react';

export default function PostAuthorCard() {
    return (
        <>
        <div class="flex-shrink-0">
                          <a href="#">
                            <span class="sr-only">Roel Aufderehar</span>
                            <img
                              class="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="ml-3">
                          <p class="text-sm font-medium text-gray-900">
                            <a href="#" class="hover:underline">
                              {post.author.user}
                            </a>
                          </p>
                          <div class="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16">
                           Nov 23, 2022
                            </time>
                            <span aria-hidden="true">&middot;</span>
                            <span>6 min read</span>
                          </div>
                        </div>
        </>
    )
}