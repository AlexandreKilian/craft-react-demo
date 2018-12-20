<?php

return [
    'overview' => function($entries) {
        $posts = [];
        foreach($entries as $entry) {
            $posts[] = ['title' => $entry->title,'url' => $entry->uri, 'summary' => $entry->summary];
        }
        return $posts;
    },
    'detail' => function($entry) {
        $post = ['title' => $entry->title,'body' => $entry->body];
        return $post;
    }
];