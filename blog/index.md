---
layout: default
title: blog
---
Blog goes here
<ul>
	{% for post in site.categories.blog %}
	<li>
		<a href="{{ post.url }}">{{post.title}}</a>
	</li>
	{% endfor %}
</ul>
